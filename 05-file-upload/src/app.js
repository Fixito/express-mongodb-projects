import 'express-async-errors';
import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import notFound from './middlewares/not-found.middleware.js';
import errorHandler from './middlewares/error-handler.middleware.js';
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(express.json());
app.use(express.static('public'));

connectDB();

import productsRouter from './features/products/products.route.js';
import connectDB from './config/db.js';

app.use('/api/v1/products', productsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
