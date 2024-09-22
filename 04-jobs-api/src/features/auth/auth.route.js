import express from 'express';
import { login, register } from './auth.controller.js';
import validate from '../../middlewares/validation.middleware.js';
import {
  loginUserSchema,
  registerUserSchema,
} from '../auth/auth.schema.js';
const router = express.Router();

router.post('/register', validate(registerUserSchema), register);
router.post('/login', validate(loginUserSchema), login);

export default router;
