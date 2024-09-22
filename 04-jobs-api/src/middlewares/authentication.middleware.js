import { UnauthenticatedError } from '../errors/index.js';
import { verifyJWT } from '../utils/tokenUtils.js';

const authenticateUser = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthenticatedError('Authentification invalide');
  }

  const token = authHeader.split(' ')[1];

  try {
    const { userId, name } = verifyJWT(token);

    // attache l'utilisateur pour la route jobs
    req.user = {
      userId,
      name,
    };

    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentification invalide');
  }
};

export default authenticateUser;
