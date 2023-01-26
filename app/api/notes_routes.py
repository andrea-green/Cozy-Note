from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import  User
# need to import Notes model
from app.models import Note
from app.models.db import db
from app.forms import Note_Form

from .validation_to_error_formatter import validation_errors_to_error_messages

notes_routes = Blueprint('notes', __name__)


# get all notes of current user.
@notes_routes.route('/')
@login_required
def get_user_notes():
    notes = Note.query.filter(Note.author_id.any(id=current_user.id)).all()
    return jsonify({"Notes": [note.to_dict() for note in notes]})

# get a single note by id
@notes_routes.route('/<int:note_id>',methods=['GET'])
@login_required
def get_single_note(note_id):
    note = Note.query.get(note_id)
    if note is None:
        return jsonify({"error": "Note not found"}), 404
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "author_id": self.author_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
    return jsonify({"Note": note.to_dict()})

# create a new note
@notes_routes.route('/', methods=['POST'])
@login_required
def create_note():
    form = Note_Form()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        note = Note(
            title=form.data['title'],
            body=form.data['body'],
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
    if note.owner_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 401

    form = Note_Form()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        note.title = form.data['title']
        note.body = form.data['body']
        db.session.commit()
        return note.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
