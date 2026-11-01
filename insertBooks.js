
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const dbPath = "./database.db";

const insertBooks = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS book (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      price INTEGER NOT NULL,
      pages INTEGER NOT NULL
    );
  `);

  const books = [
    ["Python Basics", "John", 350, 250],
    ["Java Programming", "David", 450, 300],
    ["Web Development", "Smith", 500, 400],
    ["Data Structures", "Robert", 400, 350],
    ["Machine Learning", "Alice", 600, 500],
    ["Database Systems", "James", 550, 450],
    ["C Programming", "Peter", 300, 200],
    ["Artificial Intelligence", "Sam", 650, 550],
    ["Operating Systems", "William", 450, 380],
    ["Computer Networks", "Michael", 500, 420]
  ];

  const count = await db.get("SELECT COUNT(*) AS count FROM book");

  if (count.count === 0) {
    for (const book of books) {
      await db.run(
        `INSERT INTO book (title, author, price, pages)
         VALUES (?, ?, ?, ?)`,
        book
      );
    }
  }

  const allBooks = await db.all("SELECT * FROM book");

  console.log("Books in database:");
  console.table(allBooks);

  await db.close();
};

insertBooks().catch(console.error);
