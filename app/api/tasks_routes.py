from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Task, List
from app.forms import TaskForm
from .validation_to_error_formatter import validation_errors_to_error_messages

tasks_routes = Blueprint('tasks', __name__)


# get single task by id


@tasks_routes.route('/<int:task_id>', methods=['GET'])
@login_required
def get_single_task(task_id):
    task = Task.query.get(task_id)
    if task is None:
        return jsonify({'error': "Task not found"}), 404
    task_dict = task.to_dict()
    if task.list_id != None:
        list = List.query.get(task.list_id)
        task_dict['list'] = list.to_dict()
    return jsonify({"Task": task_dict})

# create a new task


@tasks_routes.route('/', methods=["POST"])
@login_required
def create_task():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task = Task(
            content=form.data['content'],
            owner_id=current_user.id
        )
        db.session.add(task)
        db.session.commit()

        return task.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# update task route
@tasks_routes.route('/<int:task_id>', methods=['PUT'])
@login_required
def update_task(task_id):
    task = Task.query.get(task_id)
    if task is None:
        return jsonify({'error': "Task not found"}), 404
    if task.owner_id != current_user.id:
        return jsonify({'error': "Unauthorized"}), 401

    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        task.content = form.data['content']
        task.is_completed= form.data['is_completed']
        db.session.commit()
        task_dict = task.to_dict()
        return task_dict
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# delete task
@tasks_routes.route('/<int:task_id>', methods=['PUT'])
@login_required
def delete_task(task_id):
    task = Task.query.get(task_id)
    if task is None:
        return jsonify({'error': "Task not found"}), 404
    if task.owner_id != current_user.id:
        return jsonify({'error': "Unauthorized"}), 401

    db.session.delete(task)
    db.session.commit()
    return jsonify({"message":"Task successfully deleted"}),200
