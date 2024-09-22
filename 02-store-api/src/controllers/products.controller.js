import * as productsService from '../services/products.service.js';

const getAllStatic = async (req, res) => {
  const { products, nbHits } = await productsService.getAllStatic();
  res.status(200).json({ products, nbHits });
};

const getAll = async (req, res) => {
  const { products, nbHits } = await productsService.getAll(req);
  res.status(200).json({ products, nbHits });
};

export { getAll, getAllStatic };
