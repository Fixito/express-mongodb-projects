import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/index.js';

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError(
      'Veuillez fournir un email et un mot de passe'
    );
  }

  const id = new Date().getTime();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });

  res.status(200).json({ msg: 'utilisateur créé', token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Salut, ${req.user?.username} !`,
    secret: `Voici vos données autorisées. Votre numéro porte-bonheur est le ${luckyNumber}`,
  });
};

export { login, dashboard };
