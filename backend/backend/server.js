// backend/server.js
import express from 'express';
import cors from 'cors';
import expenseRoutes from './routes/expenseRoutes.js';

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use routes
app.use('/expenses', expenseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
