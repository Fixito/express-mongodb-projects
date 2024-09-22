import express from 'express';
import 'express-async-errors';
import connectDB from './config/db.config.js';
import notFound from './middlewares/not-found.middleware.js';
import errorHandler from './middlewares/error-handler.middleware.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

connectDB();

import { tasks } from './features/tasks/index.js';

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandler);

export default app;
