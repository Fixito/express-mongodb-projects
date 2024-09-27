import { StatusCodes } from 'http-status-codes';
import * as ProductsService from './products.service.js';
import { formatImage } from '../../middlewares/multer.middleware.js';
import { v2 as cloudinary } from 'cloudinary';
import { BadRequestError } from '../../errors/index.js';

const create = async (req, res) => {
  const productImage = req.file;

  let image = null;

  if (!productImage)
    throw new BadRequestError('Aucun fichier fourni');

  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize)
    throw new BadRequestError(
      'Veuillez fournir une image de taille inférieure à 1 Mo'
    );

  const file = formatImage(req.file);
  const response = await cloudinary.uploader.upload(file, {
    folder: 'products',
  });
  image = response.secure_url;

  const newProduct = { ...req.body, image };
  const product = await ProductsService.create(newProduct);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAll = async (_req, res) => {
  const products = await ProductsService.getAll();
  res.status(StatusCodes.OK).json({ products });
};

export { create, getAll };
