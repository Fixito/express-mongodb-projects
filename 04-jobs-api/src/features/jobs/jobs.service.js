import Jobs from './jobs.model.js';

const getAll = (userId) => {
  return Jobs.find({ createdBy: userId }).sort('createdAt');
};

const get = ({ jobId, userId }) => {
  return Jobs.findOne({
    _id: jobId,
    createdBy: userId,
  });
};

const create = (data) => {
  return Jobs(data).save();
};

const update = ({ data, jobId, userId }) => {
  return Jobs.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    data,
    { new: true, runValidators: true }
  );
};

const remove = ({ jobId, userId }) => {
  return Jobs.findByIdAndDelete({
    _id: jobId,
    createdBy: userId,
  });
};

export { create, getAll, get, update, remove };
