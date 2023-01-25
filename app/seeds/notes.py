
from app.models import db, Note, environment, SCHEMA

def seed_notes():
    note_1= Note(
        title="brain dump",
        author_id=1,
        notebook_id= null,
        content="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo augue orci, sed luctus erat ornare sit amet. Nam sagittis leo mi, tempor maximus libero pellentesque quis. Phasellus in augue at enim placerat tristique. Nam vel semper lorem, non rhoncus ante. Donec suscipit lorem finibus dolor varius convallis. Sed convallis eu nulla in malesuada. Proin posuere sit amet mi a pulvinar. Duis eros diam, tincidunt non suscipit vel, rhoncus sollicitudin est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque hendrerit orci in massa aliquet finibus. Nullam sed mauris felis. Nulla vel rutrum tortor. Suspendisse commodo consequat nulla quis mollis.",

    )

# fake=Faker()


# myTitle = fake.sentence();
# content = fake.paragraph(nb_sentences=5)

# print(myTitle);
# print(content);



db.session.add(note_1)

db.session.commit()

def undo_channels():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.channel_members RESTART IDENTITY CASCADE;")
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM channel_members")
        db.session.execute("DELETE FROM channels")

    db.session.commit()
