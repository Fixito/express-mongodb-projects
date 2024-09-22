import 'express-async-errors';
import express from 'express';
import notFound from './middlewares/not-found.middleware.js';
import errorHandler from './middlewares/error-handler.middleware.js';

const app = express();

import emailsRouter from './routes/email.route.js';

app.use('/api/v1/emails', emailsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
