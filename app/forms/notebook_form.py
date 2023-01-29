from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, Length
from app.models import User

class NotebookForm(FlaskForm):
    owner_id = IntegerField('owner_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired(), Length(min=1, max=100)])
    
