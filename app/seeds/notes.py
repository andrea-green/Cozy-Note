
from app.models import db, Note, environment, SCHEMA

def seed_notes():
    note_1= Note(
        title="brain dump",
        author_id=1,
        notebook_id=None,
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo augue orci, sed luctus erat ornare sit amet."
    )
    note_2= Note(
        title="brain bump",
        author_id=1,
        notebook_id=1,
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo augue orci, sed luctus erat ornare sit amet."
    )
    note_3= Note(
        title="brain pump",
        author_id=2,
        notebook_id=2,
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo augue orci, sed luctus erat ornare sit amet."
    )
    db.session.add(note_1)
    db.session.add(note_2)
    db.session.add(note_3)

    db.session.commit()

# fake=Faker()


# myTitle = fake.sentence();
# content = fake.paragraph(nb_sentences=5)

# print(myTitle);
# print(content);




def undo_notes():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")

    else:
        db.session.execute("DELETE FROM notes")

    db.session.commit()
