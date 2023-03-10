from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Task(db.Model):
    __tablename__="tasks"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    content = db.Column(db.String(2000), nullable=False)
    list_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('lists.id')), nullable=False)
    is_completed = db.Column(db.Boolean, nullable=False, default=False)

    # associations
    list = db.relationship('List', back_populates='tasks')
    author = db.relationship('User', back_populates='tasks')

    def to_dict(self):
        return {
            "id": self.id,
            "author_id":self.owner_id,
            'content': self.content,
            "list_id": self.list_id,
            "is_completed":self.is_completed
        }
