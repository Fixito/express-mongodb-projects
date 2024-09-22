import express from 'express';
import multer from 'multer';
import * as productsController from './products.controller.js';
import * as uploadsController from './prodycts-uploads.controller.js';
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router
  .route('/')
  .post(productsController.create)
  .get(productsController.getAll);

router
  .route('/uploads')
  .post(upload.single('image'), uploadsController.upload);

export default router;
