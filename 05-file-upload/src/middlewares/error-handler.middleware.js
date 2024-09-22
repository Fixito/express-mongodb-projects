import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, _req, res, _next) => {
  console.log(err);

  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Un problème s'est produit, réessayez tard",
  };

  return res
    .status(customError.statusCode)
    .json({ msg: customError.msg });
};

export default errorHandler;
