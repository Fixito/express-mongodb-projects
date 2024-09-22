import Products from './products.model.js';

const create = (data) => {
  return Products.create(data);
};

const getAll = () => {
  return Products.find({});
};

export { getAll, create };
