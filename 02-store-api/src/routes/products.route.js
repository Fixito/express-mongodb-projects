import express from 'express';
import * as taskController from '../controllers/products.controller.js';

const router = express.Router();

router.route('/').get(taskController.getAll);
router.route('/static').get(taskController.getAllStatic);

export default router;
