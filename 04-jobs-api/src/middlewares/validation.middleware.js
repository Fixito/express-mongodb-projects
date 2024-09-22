import { z } from 'zod';
import { StatusCodes } from 'http-status-codes';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
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
