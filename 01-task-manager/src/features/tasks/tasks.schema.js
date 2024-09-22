import { z } from 'zod';

const createTaskSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Le nom est requis' })
    .max(20, { message: 'Le nom ne peut pas dépasser 20 caractères' })
    .trim(),
  completed: z.boolean().default(false),
});

const updateTaskSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Le nom est requis' })
    .max(20, { message: 'Le nom ne peut pas dépasser 20 caractères' })
    .trim(),
  completed: z.boolean(),
});

export { createTaskSchema, updateTaskSchema };
