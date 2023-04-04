# :herb: Cozy-Note 

An Evernote inspired application built with Flask, React/Redux, and SQLAlchemy.Cozy Note is a note taking application that allows users to stay organized with all their productivity needs. 

## CozyNote is getting an upgrade comming soon! Here's a sneak peek : 

<img width="1421" alt="Screenshot 2023-03-30 at 8 00 16 PM" src="https://user-images.githubusercontent.com/108085381/228996732-f87a30b2-be84-484a-9a26-e493d5102d4e.png">

<img width="1403" alt="Screenshot 2023-04-04 at 10 24 00 AM" src="https://user-images.githubusercontent.com/108085381/229841039-5900ae4a-41c6-46a9-b82b-d2cb54f5dd99.png">


<img width="462" alt="Screenshot 2023-03-30 at 8 00 55 PM" src="https://user-images.githubusercontent.com/108085381/228996831-093604b7-bb02-4e82-96c5-9375bf9aa762.png">


## :open_book: Features

![Screen Shot 2023-02-19 at 12 51 48 PM](https://user-images.githubusercontent.com/108085381/219971693-45ec7dd5-49fe-46d8-843f-ee35ffa5ad57.png)


<img width="1414" alt="Screen Shot 2023-03-10 at 10 33 50 AM" src="https://user-images.githubusercontent.com/108085381/228997245-14124993-ac33-4040-94b7-df639077a6d9.png">


-Notes: Create, edit, and delete notes. Notes can also be added to notebooks. 
![Screen Shot 2023-02-19 at 12 51 16 PM](https://user-images.githubusercontent.com/108085381/219971670-fa461dcc-b493-4b29-8a74-20f67e5f0c33.png)


-Notebooks: holds notes that are assigned to it. 
![Screen Shot 2023-02-19 at 12 50 35 PM](https://user-images.githubusercontent.com/108085381/219971673-75c3c1ff-0785-4a22-b96a-4f02262d5e9e.png)

-Lists and tasks: create a list and add tasks to that list.Check off any tasks that you've already completed.

<img width="1428" alt="Screenshot 2023-03-30 at 8 05 15 PM" src="https://user-images.githubusercontent.com/108085381/228997320-0ff539d7-6dff-4ac5-9416-3f4d68070b3d.png">

## ⚡ Technologies Used
- Flask: Backend framework for building web applications.
- React: Frontend library for building user interfaces.
- Redux: State management library for React.
- SQLAlchemy: Object-relational mapper for working with databases.

## 🏠 Homepage
- [CozyNote](https://cozy-note.onrender.com/)

## 📺 Demo
- add Gif here when complete

## 🚀 Local Installation
1. Clone the repository

HTTPS:
```bash
git clone https://github.com/andrea-green/Cozy-Note
```
SSH:
```bash
git clone git@github.com:andrea-green/Cozy-Note.git
```

2. Install the dependencies
```bash
pipenv install -r requirements.txt
```

3. Create a .env file based on the example with proper settings for your development environment
```bash
SECRET_KEY= <your secret key>
DATABASE_URL=sqlite:///dev.db
SCHEMA=flask_schema
```

4. Get into your pipenv, migrate your database, seed your database, and run your Flask app

```bash
pipenv shell
```

```bash
flask db upgrade
```

```bash
flask seed all
```

```bash
flask run
```

5. Change into the react-app directory

```bash
cd react-app
```

6. Install the dependencies
```bash
npm install
```

7. Start the application
```bash
npm start
```

5. Navigate to the application in your browser


## 💻 Usage
To use CozyNote, you need to sign up for an account (or use the demo user). You can then begin creating a note or notebook. 

## 📝 Documentation
- comming soon!

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## ✏️ Authors
- :woman_technologist: [andrea-green](https://github.com/andrea-green)


