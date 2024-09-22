import { StatusCodes } from 'http-status-codes';
import Users from './auth.model.js';
import { UnauthenticatedError } from '../../errors/index.js';

const register = async (req, res) => {
  const user = await Users.create(req.body);
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError(
      'Veuillez saisir un email et un mot de passe'
    );
  }

  const user = await Users.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError(
      "informations d'identification non valides"
    );
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError(
      "informations d'identification non valides"
    );
  }

  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name }, token });
};

export { register, login };
