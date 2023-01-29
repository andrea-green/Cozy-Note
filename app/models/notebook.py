from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Notebook(db.Model):
    __tablename__="notebooks"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name= db.Column(db.String(100), nullable=False)
    notes= db.relationship('Note', back_populates='notebook', nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now())

    # note_id here.

    # associations here
    # author = db.relationship('User')
