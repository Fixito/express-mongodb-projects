import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
} from '../../errors/index.js';
import * as jobsService from './jobs.service.js';

const getAll = async (req, res) => {
  const jobs = await jobsService.getAll(req.user.userId);
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const get = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await jobsService.get({ jobId, userId });

  if (!job) throw new NotFoundError(`Pas d'offre avec l'id ${jobId}`);

  res.status(StatusCodes.OK).json({ job });
};

const create = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await jobsService.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const update = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req;

  const updatedJob = await jobsService.update({
    jobId,
    userId,
    data: req.body,
  });

  if (!updatedJob)
    throw new NotFoundError(`Pas d'offre avec l'id ${jobId}`);

  res.status(StatusCodes.OK).json({ job: updatedJob });
};

const remove = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const removedJob = await jobsService.remove({ jobId, userId });

  if (!removedJob)
    throw new NotFoundError(`Pas d'offre avec l'id ${jobId}`);

  res.status(StatusCodes.OK).json({ message: 'Job supprimé' });
};

export { create, remove, getAll, update, get };
