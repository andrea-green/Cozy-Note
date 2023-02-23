from flask import Blueprint,jsonify,request
from flask_login import login_required,current_user
from app.models import db, Task,List
from app.forms import TaskForm
from .validation_to_error_formatter import validation_errors_to_error_messages

tasks_routes = Blueprint('tasks', __name__)

# get all tasks of current user
@tasks_routes.route('/')
@login_required
def get_user_tasks():
    tasks=Task.query.filter(Task)
