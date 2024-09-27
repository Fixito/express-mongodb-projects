import express from 'express';
import * as jobsController from './jobs.controller.js';
import validate from '../../middlewares/validation.middleware.js';
import { jobParamsSchema, jobBodySchema } from './jobs.schema.js';

const router = express.Router();

router
  .route('/')
  .get(jobsController.getAll)
  .post(validate({ body: jobBodySchema }), jobsController.create);

router
  .route('/:id')
  .get(validate({ params: jobParamsSchema }), jobsController.get)
  .put(
    validate({ body: jobBodySchema, params: jobParamsSchema }),
    jobsController.update
  )
  .delete(
    validate({ params: jobParamsSchema }),
    jobsController.remove
  );

export default router;
