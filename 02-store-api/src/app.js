import express from 'express';
import notFound from './middlewares/not-found.middleware.js';
import errorhHanler from './middlewares/error-handler.middleware.js';
import connectDB from './config/db.config.js';

const app = express();

connectDB();

import productsRouter from './routes/products.route.js';

app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorhHanler);

export default app;
