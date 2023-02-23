from app.models import db, Task, environment, SCHEMA


def seed_tasks():
    task1 = Task(
        content="Clean the kitchen",
        list_id=1,
    )
    task2 = Task(
        content="Do laundry",
        list_id=1,
    )
    task3 = Task(
        content="Take out the trash",
        list_id=1,
    )
    task4 = Task(
        content="Buy groceries",
        list_id=1,
    )
    task5 = Task(
        content="Pay bills",
        list_id=1,
    )
    task6 = Task(
        content="Apples",
        list_id=2,
    )
    task7 = Task(
        content="Bananas",
        list_id=2,
    )
    task8 = Task(
        content="Bread",
        list_id=2,
    )
    task9 = Task(
        content="Cheese",
        list_id=2,
    )
    task10 = Task(
        content="Chicken",
        list_id=2,
    )
    task11 = Task(
        content="Pasta",
        list_id=2,
    )
    task12 = Task(
        content="Rice",
        list_id=3,
    )
    task13 = Task(
        content="Apples",
        list_id=3,
    )
    task14 = Task(
        content="Bananas",
        list_id=3,
    )
    task15 = Task(
        content="Bread",
        list_id=3,
    )
    task16 = Task(
        content="Cheese",
        list_id=3,
    )
    task17 = Task(
        content="Chicken",
        list_id=3,
    )
    task18 = Task(
        content="Pasta",
        list_id=3,
    )
    task19 = Task(
        content="Stairway to Heaven",
        list_id=4,
    )
    task20 = Task(
        content="The Immigrant Song",
        list_id=4,
    )
    task21 = Task(
        content="Enter Sandman",
        list_id=4,
    )
    task22 = Task(
        content="Highway Tune",
        list_id=4,
    )
    task23 = Task(
        content="Dreams",
        list_id=4,
    )
    task24 = Task(
        content="Rhiannon",
        list_id=3,
    )

    db.session.add_all(['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10', 'task11', 'task12', 'task13', 'task14', 'task15', 'task16', 'task17', 'task18', 'task19', 'task20', 'task21', 'task22', 'task23', 'task24']
                       )

    db.session.commit()


def undo_tasks():

    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM tasks")

    db.session.commit()
