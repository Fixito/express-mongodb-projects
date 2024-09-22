import express from 'express';
import * as jobsController from './jobs.controller.js';
import validate from '../../middlewares/validation.middleware.js';
import { jobsInputSchema } from './jobs.schema.js';

const router = express.Router();

router
  .route('/')
  .get(jobsController.getAll)
  .post(validate(jobsInputSchema), jobsController.create);

router
  .route('/:id')
  .get(jobsController.get)
  .put(validate(jobsInputSchema), jobsController.update)
  .delete(jobsController.remove);

export default router;
