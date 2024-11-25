import { BadRequestError, NotFoundError } from '../../errors/index.js';
import { StatusCodes } from 'http-status-codes';
import * as tasksService from './tasks.service.js';

export const getAll = async (_req, res) => {
  const tasks = await tasksService.getAll();
  return res.status(StatusCodes.OK).json({ tasks });
};

export const get = async (req, res) => {
  const task = await tasksService.get(req.params.id);
  if (!task)
    throw new NotFoundError(`Aucune tâche trouvée avec l'id ${req.params.id}`);
  return res.status(StatusCodes.OK).json({ task });
};

export const create = async (req, res) => {
  if (!req.body.name)
    throw new BadRequestError('Le nom de la tâche est requis');
  const task = await tasksService.create(req.body);
  return res.status(StatusCodes.CREATED).json({ task });
};

export const update = async (req, res) => {
  const {
    params: { id },
    body: { name },
  } = req;
  if (!name) throw new BadRequestError('Le nom de la tâche est requis');
  const task = await tasksService.update(id, req.body);
  if (!task)
    throw new NotFoundError(`Aucune tâche trouvée avec l'id ${req.params.id}`);
  return res.status(StatusCodes.OK).json({ task });
};

export const remove = async (req, res) => {
  const task = await tasksService.remove(req.params.id);
  if (!task)
    throw new NotFoundError(`Aucune tâche trouvée avec l'id ${req.params.id}`);
  return res.status(StatusCodes.OK).json({ message: 'Tâche supprimée' });
};
