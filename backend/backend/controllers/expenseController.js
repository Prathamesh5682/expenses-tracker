// backend/controllers/expenseController.js
import { getAllExpenses, createExpense, updateExpense, deleteExpense } from '../models/expenseModel.js';

export const getExpenses = async (req, res) => {
  try {
    const expenses = await getAllExpenses();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addExpense = async (req, res) => {
  try {
    await createExpense(req.body);
    res.status(201).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editExpense = async (req, res) => {
  try {
    await updateExpense(req.params.id, req.body);
    res.json({ message: 'Expense updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeExpense = async (req, res) => {
  try {
    await deleteExpense(req.params.id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
