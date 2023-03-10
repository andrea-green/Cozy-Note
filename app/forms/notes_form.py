from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, Length
from app.models import User


class NoteForm(FlaskForm):
    author_id = IntegerField('Author Id')
    notebook_id = IntegerField('Notebook Id')
    title = StringField('Title', validators=[DataRequired(),Length(min=3, max=500)])
    content = StringField('Content', validators=[Length(min=0, max=500000)])
