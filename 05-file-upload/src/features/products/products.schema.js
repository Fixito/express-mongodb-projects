import { z } from 'zod';

const productSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  price: z.preprocess(
    (val) => parseFloat(val),
    z.number().positive('Le prix doit être positif')
  ),
});

const fileSchema = z.object({
  mimetype: z
    .string()
    .refine(
      (type) => type.startsWith('image/'),
      'Veuillez fournir une image'
    ),
});

export { fileSchema, productSchema };
