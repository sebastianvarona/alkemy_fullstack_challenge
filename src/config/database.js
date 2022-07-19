import sqlite3 from 'sqlite3';
sqlite3.verbose();

const database = () => new sqlite3.Database('src/db/database.db');

export const initializeDatabase = () => {
  const db = database();
  db.run(`CREATE TABLE IF NOT EXISTS data (
		id INTEGER PRIMARY KEY,
		concepto varchar(255) not null,
		monto double(10,2) not null,
		fecha char(10) not null,
		tipo varchar(10) not null,
		categoria varchar(255)
	)`);
  db.close();
};

export default database;
