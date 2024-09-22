import { StatusCodes } from 'http-status-codes';
import * as ProductsService from './products.service.js';

const create = async (req, res) => {
  const product = await ProductsService.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const getAll = async (_req, res) => {
  const products = await ProductsService.getAll();
  res.status(StatusCodes.OK).json({ products });
};

export { create, getAll };
