from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Note(db.Model):
    __tablename__="notes"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    notebook_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('notebooks.id')), nullable=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.String(2000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    # associations here
    notebook = db.relationship('Notebook', back_populates='notes')
    author = db.relationship('User', back_populates='notes')
