from app.models import db,List,environment, SCHEMA

def seed_lists():
    list_1=List(
        author_id=1,
        title="List 1"
    )
    list_2=List(
        author_id=1,
        title="List 2"
    )
    list_3=List(
        author_id=1,
        title="List 3"
    )
    list_4=List(
        author_id=2,
        title="List 2"
    )
    list_5=List(
        author_id=2,
        title="List 5"
    )
    list_6=List(
        author_id=2,
        title="List 6"
    )
    list_7=List(
        author_id=3,
        title="List 7"
    )
    list_8=List(
        author_id=3,
        title="List 8"
    )
    list_9=List(
        author_id=1,
        title="List9"
    )


    db.session.add(list_1)
    db.session.add(list_2)
    db.session.add(list_3)
    db.session.add(list_4)
    db.session.add(list_5)
    db.session.add(list_6)
    db.session.add(list_7)
    db.session.add(list_8)
    db.session.add(list_9)

    db.session.commit()

def undo_lists():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.lists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM lists")

    db.session.commit()
