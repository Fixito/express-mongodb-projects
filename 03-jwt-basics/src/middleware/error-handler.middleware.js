import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, _req, res, _next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong try again later',
  };

  return res
    .status(customError.statusCode)
    .json({ msg: customError.msg });
};

export default errorHandler;
