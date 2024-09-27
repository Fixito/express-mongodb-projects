import { z } from 'zod';
import { REQUEST_URI_TOO_LONG, StatusCodes } from 'http-status-codes';

const validate =
  ({ params, body }) =>
  (req, res, next) => {
    try {
      if (params) {
        params.parse(req.params);
      }

      if (body) {
        body.parse(req.body);
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
