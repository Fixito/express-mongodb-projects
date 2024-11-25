import 'express-async-errors';
import 'dotenv/config.js';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import connectDB from './config/db.config.js';

import notFound from './middlewares/not-found.middleware.js';
import errorHandler from './middlewares/error-handler.middleware.js';

import { tasks } from './features/tasks/index.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/health', (_req, res) => {
  res.status(StatusCodes.OK).json({ status: 'Server is running!' });
});

connectDB();

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

export default app;
