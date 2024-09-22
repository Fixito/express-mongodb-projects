import express from 'express';
import cookieParser from 'cookie-parser';
import notFound from './middleware/not-found.middleware.js';
import errorHandler from './middleware/error-handler.middleware.js';
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

import authRouter from './routes/auth.route.js';

app.use('/api/v1/', authRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
