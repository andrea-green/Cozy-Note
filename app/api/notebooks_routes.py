from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Notebook, User, db
from app.forms import Notebook_Form
from app.api.auth_routes import validation_errors_to_error_messages


notebooks_routes = Blueprint('notebooks', __name__)



# get all notebooks of current users notebooks
@notebooks_routes.route('/<int:notebook_id>',methods=['GET'])
