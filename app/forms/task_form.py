from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField, BooleanField
from wtforms.validators import DataRequired, Length
from app.models import User

class TaskForm(FlaskForm):
    owner_id=IntegerField('Owner Id')
    content = StringField('Content',validators=[DataRequired(),Length(min=2,max=50000)])
    list_id = IntegerField('List Id')
    is_completed = BooleanField('is completed',validators=[DataRequired()])
