from app.models import db, Notebook, environment, SCHEMA

def seed_notebooks():
    notebook_1= Notebook(
        owner_id=1,
        name="My Notebook"
    )
    notebook_2= Notebook(
        owner_id=1,
        name="Biology notes"
    )
    notebook_3= Notebook(
        owner_id=1,
        name="Chem notes"
    )
    notebook_4= Notebook(
        owner_id=2,
        name="Math notes"
    )
    notebook_5= Notebook(
        owner_id=2,
        name="My notes"
    )
    notebook_6= Notebook(
        owner_id=3,
        name="Random notes"
    )
    notebook_7= Notebook(
        owner_id=3,
        name="Physics notes"
    )


    db.session.add(notebook_1)
    db.session.add(notebook_2)
    db.session.add(notebook_3)
    db.session.add(notebook_4)
    db.session.add(notebook_5)
    db.session.add(notebook_6)
    db.session.add(notebook_7)

    db.session.commit()

def undo_notebooks():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.notebooks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notebooks")

    db.session.commit()
