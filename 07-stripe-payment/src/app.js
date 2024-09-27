import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/error-handler.middleware.js';
import notFound from './middlewares/not-found.middleware.js';
import stripeController from './controller/stripe.controller.js';

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/create-payment-intent', stripeController);

app.use(notFound);
app.use(errorHandler);

export default app;
