import { StatusCodes } from 'http-status-codes';

const notFound = (_req, res) =>
  res.status(StatusCodes.NOT_FOUND).send("La route n'existe pas");

export default notFound;
