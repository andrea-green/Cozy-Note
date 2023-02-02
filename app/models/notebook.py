from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Notebook(db.Model):
    __tablename__="notebooks"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name= db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.now(), onupdate=datetime.now())

    # note_id here.

    # associations here
    notes= db.relationship('Note', back_populates='notebook')
    author = db.relationship('User', back_populates='notebooks')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "owner_id": self.owner_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
