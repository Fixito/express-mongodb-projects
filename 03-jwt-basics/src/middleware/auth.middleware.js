import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/index.js';

const authenticationMiddleware = async (req, _res, next) => {
  let token = null;

  if (req.signedCookies.token) {
    token = req.signedCookies.token;
  }

  if (!token) {
    throw new UnauthenticatedError('Pas de token fourni.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError(
      'Accès à cette route non autorisé.'
    );
  }
};

export default authenticationMiddleware;
