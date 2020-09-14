const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
  // open the database
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
  return db;
}

const insert = async (bytes) => {
  // this is a top-level await
  const db = await openDb();
  return await db.run('INSERT INTO ImageData (data) VALUES (?)', bytes);
};

const list = async () => {
  const db = await openDb();
  return await db.get('SELECT * FROM ImageData');
};

const createTable = async () => {
  const db = await openDb();
  return await db.exec('CREATE TABLE ImageData (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data BLOB)');
};

module.exports = {
  insert,
  list,
  createTable,
};
