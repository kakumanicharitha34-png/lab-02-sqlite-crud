# Lab 2 – SQLite Database and CRUD Operations

## 1. Project Description

This project demonstrates CRUD (Create, Read, Update, Delete) operations using SQLite database and Node.js with Express.js.

The application provides REST API endpoints to manage book records stored in an SQLite database.

## 2. Technologies Used

- Node.js
- Express.js
- SQLite
- JavaScript
- Postman
- VS Code

## 3. Project Structure

```text
lab-02/
│
├── database.db
├── insertBooks.js
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## 4. Database Structure

Table Name: `book`

| Column | Data Type |
|---|---|
| id | INTEGER PRIMARY KEY AUTOINCREMENT |
| title | TEXT |
| author | TEXT |
| price | INTEGER |
| pages | INTEGER |

## 5. CRUD Operations

### CREATE – POST
Adds a new book to the database.

Endpoint:
`POST /books/`

### READ – GET
Retrieves all books from the database.

Endpoint:
`GET /books/`

Retrieves a particular book using its ID.

Endpoint:
`GET /books/:bookId/`

### UPDATE – PUT
Updates the details of an existing book.

Endpoint:
`PUT /books/:bookId/`

### DELETE – DELETE
Deletes a book from the database using its ID.

Endpoint:
`DELETE /books/:bookId/`

## 6. Installation and Execution

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. The server runs at:

`http://localhost:3000/`

6. Use Postman to test all CRUD operations.

## 7. API Testing

The following operations were tested using Postman:

- GET all books
- GET a book by ID
- POST a new book
- PUT to update a book
- DELETE a book

## 8. Expected Results

The application successfully performs CRUD operations on book records using SQLite.

The API returns appropriate HTTP status codes and JSON responses.

## 9. Conclusion

This project helped me understand database connectivity, REST API development, SQL queries, and CRUD operations using Node.js, Express.js, and SQLite.

**Project:** Lab 2 – SQLite Database and CRUD Routes