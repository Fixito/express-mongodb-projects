import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';
import { fileSchema } from '../features/products/products.schema.js';

const validate =
  ({ params, body }) =>
  (req, res, next) => {
    try {
      if (params) {
        params.parse(req.params);
      }

      if (body) {
        const parsedBody = body.parse(req.body);
        req.body = parsedBody;
      }

      if (req.file) {
        fileSchema.parse(req.file);
      }

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ errors: error.errors });
      }

      next(error);
    }
  };

export default validate;
