import express from 'express';
const router = express.Router();
import * as emailsController from '../controllers/emails.controller.js';

router.get('/send', emailsController.sendEmail);

export default router;
