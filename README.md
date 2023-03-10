# :herb: Cozy-Note 

An Evernote inspired application built with Flask, React/Redux, and SQLAlchemy.Cozy Note is a note taking application that allows users to stay organized with all their productivity needs. 
![Screen Shot 2023-02-19 at 12 51 48 PM](https://user-images.githubusercontent.com/108085381/219971693-45ec7dd5-49fe-46d8-843f-ee35ffa5ad57.png)


## :open_book: Features
-Notes: Create, edit, and delete notes. Notes can also be added to notebooks. 
![Screen Shot 2023-02-19 at 12 51 16 PM](https://user-images.githubusercontent.com/108085381/219971670-fa461dcc-b493-4b29-8a74-20f67e5f0c33.png)


-Notebooks: holds notes that are assigned to it. 
![Screen Shot 2023-02-19 at 12 50 35 PM](https://user-images.githubusercontent.com/108085381/219971673-75c3c1ff-0785-4a22-b96a-4f02262d5e9e.png)

## Coming soon! 
- To Do tasks : Create, edit, view, and delete to do tasks on a to do list. 
-Reminders: Create, edit, view, and delete reminders on any tasks. 
-Rich text editor

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


