import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, _req, res, _next) => {
  console.log(err);

  const statusCode =
    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'Something went wrong try again later';

  return res.status(statusCode).json({ msg });
};

export default errorHandler;
