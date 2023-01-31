from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Notebook, User, db
from app.forms import NotebookForm
from app.api.auth_routes import validation_errors_to_error_messages


notebooks_routes = Blueprint('notebooks', __name__)



# get all notebooks of current users notebooks
@notebooks_routes.route('/',methods=['GET'])
@login_required
def get_user_notebooks():
    notebooks = Notebook.query.filter(Notebook.owner_id == current_user.id).all()
    notebook_dict=[notebook.to_dict() for notebook in notebooks]
    return jsonify({"Notebooks": notebook_dict})


    return jsonify({"Notebooks": [notebook.to_dict() for notebook in notebooks]})

# get single notebook by id
@notebooks_routes.route('/<int:notebook_id>',methods=['GET'])
@login_required
def get_single_notebook(notebook_id):
    notebook = Notebook.query.get(notebook_id)
    if notebook is None:
        return jsonify({"error": "Notebook not found"}), 404
    notebook_dict = notebook.to_dict()
    note = notebook.note.to_dict()
    notebook_dict['note'] = note
    return jsonify({"Notebook": notebook_dict})

# create notebook
@notebooks_routes.route('/',methods=['POST'])
@login_required
def create_notebook():
    form = NotebookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        notebook = Notebook(
            name=form.data['name'],
            author_id=current_user.id,
        )
        db.session.add(notebook)
        db.session.commit()
        return notebook.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# update notebook
@notebooks_routes.route('/<int:notebook_id>',methods=['PUT'])
@login_required
def update_notebook(notebook_id):
    notebook = Notebook.query.get(notebook_id)
    if notebook is None:
        return jsonify({"error": "Notebook not found"}), 404
    if notebook.owner_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 401

    form = NotebookForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        notebook.name = form.data['name']
        db.session.commit()
        return notebook.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# delete notebook
@notebooks_routes.route('/<int:notebook_id>',methods=['DELETE'])
@login_required
def delete_notebook(notebook_id):
    notebook = Notebook.query.get(notebook_id)
    if notebook is None:
        return jsonify({"error": "Notebook not found"}), 404
    if notebook.owner_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 401
    db.session.delete(notebook)
    db.session.commit()
    return jsonify({"message": "Notebook deleted"}), 200
