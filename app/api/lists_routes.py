from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.models import User, List,db,Task
from app.forms import ListForm


from .validation_to_error_formatter import validation_errors_to_error_messages

lists_routes = Blueprint('lists', __name__)


# get all lists of current user.
@lists_routes.route('/')
@login_required
def get_user_lists():
    lists = List.query.filter(List.author_id == current_user.id).all()
    list_dict = [list.to_dict() for list in lists]
    return jsonify({"Lists": list_dict})

# get single list of current user.
@lists_routes.route('/<int:list_id>',methods=['GET'])
@login_required
def get_single_list(list_id):
    list = List.query.get(list_id)
    if list is None:
        return jsonify({"error": "List not found"}),404
    return jsonify({"List": list.to_dict()})

# create list
@lists_routes.route('/', methods=["POST"])
@login_required
def create_list():
    form = ListForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        list = List(
            title=form.data['title'],
            author_id=current_user.id,
        )

        db.session.add(list)
        db.session.commit()
        return list.to_dict()
    return {'errors':validation_errors_to_error_messages(form.errors)},400

# update list
@lists_routes.route('/<int:list_id>',methods=['PUT'])
@login_required
def update_list(list_id):
    list = List.query.get(list_id)
    if list is None:
        return jsonify({"error":"List not found"}), 404
    if list.author_id != current_user.id:
        return jsonify({"error":"Unauthorized"}), 401

    form = ListForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        list.title = form.data['title']
        db.session.commit()
        return list.to_dict()
    return {'error': validation_errors_to_error_messages(form.errors)},400

# delete list
@lists_routes.route('/<int:list_id>', methods=['DELETE'])
@login_required
def delete_list(list_id):
    list = List.query.get(list_id)
    if list is None:
        return jsonify({"error":"List not found"}), 404
    if list.author_id != current_user.id:
        return jsonify({"error": "unauthorized"}), 401
    db.session.delete(list)
    db.session.commit()
    return jsonify({"message": "Notebook deleted"}),200


# get all tasks of current user on current list

@lists_routes.route('/<int:list_id>/tasks')
@login_required
def get_list_tasks(list_id):
    tasks = Task.query.filter(Task.owner_id == current_user.id , Task.list_id == list_id).all()
    tasks_dict = []
    for task in tasks:
        task_dict = task.to_dict()
        if task.list:
            list = task.list.to_dict()
            task_dict['list'] = list
        tasks_dict.append(task_dict)
    return jsonify({"Tasks": tasks_dict})
