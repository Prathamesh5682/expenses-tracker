import mysql from 'mysql2/promise';

const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Patil@56',
  database: 'expense_tracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;
