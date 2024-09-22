import { StatusCodes } from 'http-status-codes';

const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.errors.map(
        (error) => error.message
      );

      throw new Error(errors.join(','));
    }

    next();
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Validation error',
      errors: err.message,
    });
  }
};

export default validate;
