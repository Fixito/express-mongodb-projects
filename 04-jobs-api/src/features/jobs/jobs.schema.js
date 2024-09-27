import { z } from 'zod';
import mongoose from 'mongoose';
import { JOB_STATUS } from '../../utils/constants.js';

const jobParamsSchema = z.object({
  id: z.string().refine((id) => mongoose.isValidObjectId(id), {
    message: 'Invalid ObjectId',
  }),
});

const jobBodySchema = z.object({
  company: z.string().min(1),
  position: z.string().min(1),
  status: z.enum([
    JOB_STATUS.DECLINED,
    JOB_STATUS.INTERVIEW,
    JOB_STATUS.PENDING,
  ]),
});

export { jobParamsSchema, jobBodySchema };
