from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import  User
# need to import Notes model
from app.models.db import db
from app.forms import Note_Form

from .validation_to_error_formatter import validation_errors_to_error_messages

notes_routes = Blueprint('notes', __name__)
