from faker import Faker
# from app.models import db, User, environment, SCHEMA


fake=Faker()


myTitle = fake.sentence();
content = fake.paragraph(nb_sentences=5)

print(myTitle);
print(content);

# db.session.add(myTitle)
# db.session.add(content)
# db.session.commit()

# def undo_channels():

#     if environment == "production":
#         db.session.execute(
#             f"TRUNCATE table {SCHEMA}.channel_members RESTART IDENTITY CASCADE;")
#         db.session.execute(
#             f"TRUNCATE table {SCHEMA}.channels RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM channel_members")
#         db.session.execute("DELETE FROM channels")

#     db.session.commit()
