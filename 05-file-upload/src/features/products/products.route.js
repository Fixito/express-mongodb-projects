import express from 'express';
import * as productsController from './products.controller.js';
import upload from '../../middlewares/multer.middleware.js';
import validate from '../../middlewares/validation.middleware.js';
import { productSchema } from './products.schema.js';

const router = express.Router();

router
  .route('/')
  .post(
    upload.single('image'),
    validate({ body: productSchema }),
    productsController.create
  )
  .get(productsController.getAll);

export default router;
