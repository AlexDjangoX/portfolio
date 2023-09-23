import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(3, 'At least 3 characters'),
  email: z.string().email('Must be a valid email'),
  message: z.string().min(3, 'At least 3 characters'),
  contact: z
    .string()
    .refine(
      (value) =>
        /[^@]+@[^.]+.+/g.test(value) ||
        /^(?:[+()\-\s]*\d)+[+()\-\s\d]*$/.test(value),
      'Valid email or phone number'
    ),
});
