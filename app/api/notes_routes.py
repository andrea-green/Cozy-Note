from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Note, Notebook, db
from app.forms import NoteForm


from .validation_to_error_formatter import validation_errors_to_error_messages

notes_routes = Blueprint('notes', __name__)


# get all notes of current user.
@notes_routes.route('/')
@login_required
def get_user_notes():
    notes = Note.query.filter(Note.author_id == current_user.id).all()
    notes_dict = []
    for note in notes:
        note_dict = note.to_dict()
        if note.notebook:
            notebook = note.notebook.to_dict()
            note_dict['notebook'] = notebook
        notes_dict.append(note_dict)

    return jsonify({"Notes": notes_dict})

# get a single note by id


@notes_routes.route('/<int:note_id>', methods=['GET'])
@login_required
def get_single_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({"error": "Note not found"}), 404

    note_dict = note.to_dict()
    if note.notebook_id != None:
        notebook = Notebook.query.get(note.notebook_id)
        note_dict['notebook'] = notebook.to_dict()
    return jsonify({"Note": note_dict})

# create a new note


@notes_routes.route('/', methods=['POST'])
@login_required
def create_note():
    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        note = Note(
            title=form.data['title'],
            content=form.data['content'],
            author_id=current_user.id,
        )
        db.session.add(note)
        db.session.commit()

        return note.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# update a note


@notes_routes.route('/<int:note_id>', methods=['PUT'])
@login_required
def update_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({"error": "Note not found"}), 404
    if note.author_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 401
    notebookId = request.json['notebookId']
    notebook = Notebook.query.get(notebookId)

    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if notebookId != None:
            note.notebook_id = notebookId
            note.notebook = notebook
        note.title = form.data['title']
        note.content = form.data['content']
        db.session.commit()
        note_dict = note.to_dict()
        note_dict['notebook'] = notebook.to_dict()
        return note_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# delete a note


@notes_routes.route('/<int:note_id>', methods=['DELETE'])
@login_required
def delete_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({"error": "Note not found"}), 404
    if note.author_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 401
    db.session.delete(note)
    db.session.commit()
    return jsonify({"message": "Note deleted"}), 200
