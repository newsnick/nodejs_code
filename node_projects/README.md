# React MVC CRUD App Documentation

This repository showcases a CRUD (Create, Read, Update, Delete) application built using React in an MVC (Model-View-Controller) architecture. The app allows users to manage contacts with various operations. Below is a detailed documentation on the features, setup, and usage of this application.

## Features

- Create, Read, Update, and Delete contacts.
- Search contacts by name.
- MVC architecture for better separation of concerns.
- Utilizes React for the frontend and Express.js with MongoDB for the backend.

## Project Setup

### Local Machine Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/newsnick/node_projects.git <your-folder>
   cd <your-folder>
   ```

**Note: `<your-folder>` will automatically be created during the operation.**

2. Navigate to the frontend directory and install dependencies:

   ```bash
   cd frontend_app
   npm install
   ```

3. Navigate to the backend directory and install dependencies.

   ```bash
   cd backend_app
   npm install
   ```

## Setting Up the Express API

1. Create a MongoDB Atlas account and get the connection URI.
2. Replace `dbURI` in `db-connection.js` with your MongoDB connection URI.

**Note: the above steps are optional as a connection URI (`test`) is already provided in this project.**

3. Start the backend server:

   ```bash
   npm start
   ```

4. The Express API will be accessible at `http://localhost:8080`

## Running the Frontend

1. Start the React app:

   ```bash
   cd frontend_app
   npm start
   ```

## User Features

- View a List of contacts.
- Search for contacts by name.
- Create a new contact.
- Update an existing contact.
- Delete a contact.

## Technologies Used

### Frontend

- React
- React Router
- Bootstrap (for styling)

### Backend

- Express.js
- MongoDB (Atlas)
- Mongoose (ODM for MongoDB)

## ContactList

The `ContactList.jsx` component is the main interface for managing contacts. It allows users to search, view, create, update, and delete contacts.

![alt text](https://github.com/newsnick/nodejs_code/blob/main/node_projects/frontend_app/assets/images/1.%20main.png?raw=true)

## How to Contribute

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:

```bash
 git clone https://github.com/your-username/your-repo.git
 cd your-repo
```

3. Install the dependencies:

```bash
 cd frontend_app
 npm install
```

4. Create a new branch for your changes:

```bash
 git checkout -b feature/new-feature
```

5. Make your changes and commit them:

```bash
 git commit -m "Add new feature"
```

6. Push your changes to your forked repository:

```bash
 git push origin feature/new-feature
```

7. Create a pull request on GitHub.

8. Wait for your changes to be reviewed and merged.

### Licence

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the [LICENCE](https://choosealicense.com/licenses/mit/) file for details.
