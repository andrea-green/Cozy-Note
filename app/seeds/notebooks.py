from app.models import db, Notebook, environment, SCHEMA

def seed_notebooks():
    notebook_1= Notebook(
        name="My Notebook",
        owner_id=1
    ),
    notebook_2= Notebook(
        name="Biology notes",
        owner_id=1

    ),
    notebook_3= Notebook(
        name="Chem notes",
        owner_id=2

    ),
    notebook_4= Notebook(
        name="Math notes",
        owner_id=3

    ),
    notebook_4= Notebook(
        name="physics",
        owner_id=4
    ),

db.session.add(seed_notebooks)

db.session.commit()

def undo_channels():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.notebook RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notebook")


    db.session.commit()
