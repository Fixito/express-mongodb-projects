import express from 'express';
import * as tasksController from './tasks.controller.js';
import validateTask from '../../middlewares/validation.middleware.js';
import {
  createTaskSchema,
  updateTaskSchema,
} from './tasks.schema.js';

const router = express.Router();

router
  .route('/')
  .get(tasksController.getAll)
  .post(validateTask(createTaskSchema), tasksController.create);

router
  .route('/:id')
  .get(tasksController.get)
  .put(validateTask(updateTaskSchema), tasksController.update)
  .delete(tasksController.remove);

export default router;
