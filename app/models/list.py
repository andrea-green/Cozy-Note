from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class List(db.Model):
    __tablename__="lists"

    if environment == "production":
        __table_args__={'schema': SCHEMA}

    id = db.Column(db.Integer,primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())


    # associations
    author = db.relationship('User',back_populates="notes")

    def format_date(self,date):
        date_year = date.year
        today = datetime.now()
        today_year = today.strtime("%Y")
        if str(date_year) == str(today_year):
            return date.strftime("%b %d")
        else:
            return date.strftime("%b %d, %Y")

    def to_dict(self):
        return {
            "id": self.id,
            "author_id": self.author_id,
            "title": self.title,
            "created_at": self.format_date(self.created_at)
        }
