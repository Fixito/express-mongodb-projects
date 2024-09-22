import Tasks from './tasks.model.js';

const getAll = () => {
  return Tasks.find();
};

const get = (id) => {
  return Tasks.findOne({ _id: id });
};

const create = (data) => {
  return new Tasks(data).save();
};

const update = (id, data) => {
  return Tasks.findOneAndUpdate({ _id: id }, data, { new: true });
};

const remove = (id) => {
  return Tasks.findByIdAndDelete(id, { new: true });
};

export { getAll, get, create, update, remove };
