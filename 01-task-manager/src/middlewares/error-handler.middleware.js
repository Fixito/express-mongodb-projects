import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, _req, res, _next) => {
  const statusCode =
    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg =
    err.message || "Une erreur s'est produite, réessayez plus tard";

  return res.status(statusCode).json({ msg });
};

export default errorHandler;
