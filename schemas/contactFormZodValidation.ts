import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters'),
  email: z.string().email('Must be a valid email'),
  message: z.string().min(3, 'Message should be at least 3 characters'),
  contact: z
    .string()
    .refine(
      (value) =>
        /[^@]+@[^.]+.+/g.test(value) ||
        /^(\+[0-9]{1,3}[-.\s]?)?(\(?[0-9]{1,4}\)?[-.\s]?)?([0-9]{1,4}[-.\s]?){1,2}[0-9]{1,4}$/.test(
          value
        ),
      'Contact must be a valid email or phone number'
    ),
});
