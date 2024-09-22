import { z } from 'zod';
import { JOB_STATUS } from '../../utils/constants.js';

const jobsInputSchema = z.object({
  company: z.string().min(1),
  position: z.string().min(1),
  status: z.enum([
    JOB_STATUS.DECLINED,
    JOB_STATUS.INTERVIEW,
    JOB_STATUS.PENDING,
  ]),
});

export { jobsInputSchema };
