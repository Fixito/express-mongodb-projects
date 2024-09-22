import express from 'express';
import { dashboard, login } from '../controllers/auth.controller.js';
import authenticationMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.route('/dashboard').get(authenticationMiddleware, dashboard);
router.route('/login').post(login);

export default router;
