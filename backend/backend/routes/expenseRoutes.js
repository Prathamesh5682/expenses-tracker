// backend/routes/expenseRoutes.js
import express from 'express';
import { getExpenses, addExpense, editExpense, removeExpense } from '../controllers/expenseController.js';

const router = express.Router();

router.get('/', getExpenses);                   // Get all expenses
router.post('/', addExpense);                   // Add new expense
router.put('/:id', editExpense);               // Edit an existing expense
router.delete('/:id', removeExpense);          // Delete an expense

export default router;
