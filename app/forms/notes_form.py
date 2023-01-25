from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class Note_Form(FlaskForm):
    author_id = IntegerField('Author Id', validators=[DataRequired()])
    notebook_id = IntegerField('Notebook Id', validators=[DataRequired()])
    title = StringField('Title', validators=[DataRequired()],Length(min=1, max=500))
    content = StringField('Content', validators=[DataRequired()],Length(min=1, max=500000))
   
