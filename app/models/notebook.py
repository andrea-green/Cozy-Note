from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Notebook(db.Model):
    __tablename__="notebook"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name= db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    # associations here
    # author = db.relationship('User')
