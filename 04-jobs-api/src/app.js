import 'express-async-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimiter from 'express-rate-limit';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import connectDB from './config/db.config.js';
import authenticateUser from './middlewares/authentication.middleware.js';
import errorHandler from './middlewares/error-handler.middleware.js';
import notFound from './middlewares/not-found.middleware.js';

const swaggerDocument = YAML.load('./swagger.yaml');
const app = express();

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  })
);
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument)
);

connectDB();

import authRouter from './features/auth/auth.route.js';
import jobsRouter from './features/jobs/jobs.route.js';

app.get('/', (_req, res) => {
  res.send("<h1>API Jobs</h1><a href='/api-docs'>Documentation</a>");
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
