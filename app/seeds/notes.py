
from app.models import db, Note, environment, SCHEMA

def seed_notes():
    note_1= Note(
        title="brain dump",
        author_id=1,
        notebook_id= 'null',
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo augue orci, sed luctus erat ornare sit amet."
    )

# fake=Faker()


# myTitle = fake.sentence();
# content = fake.paragraph(nb_sentences=5)

# print(myTitle);
# print(content);



db.session.add(seed_notes)

db.session.commit()

def undo_channels():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.note RESTART IDENTITY CASCADE;")

    else:
        db.session.execute("DELETE FROM note")

    db.session.commit()
