// backend/models/expenseModel.js
import db from '../db.js';

export const getAllExpenses = async () => {
  const [rows] = await db.query('SELECT * FROM expenses');
  return rows;
};

export const createExpense = async (expense) => {
  const { amount, category, description, date } = expense;
  await db.query('INSERT INTO expenses (amount, category, description, date) VALUES (?, ?, ?, ?)', 
    [amount, category, description, date]);
};

export const updateExpense = async (id, expense) => {
  const { amount, category, description, date } = expense;
  await db.query('UPDATE expenses SET amount=?, category=?, description=?, date=? WHERE id=?',
    [amount, category, description, date, id]);
};

export const deleteExpense = async (id) => {
  await db.query('DELETE FROM expenses WHERE id = ?', [id]);
};
