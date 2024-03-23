import { z } from 'zod';

export const FormSchema = z.object({
	email: z
		.string({ required_error: 'Email cannot be blank' })
		.email('Please provide a valid email'),
	password: z
		.string({ required_error: 'Password cannot be blank' })
		.min(6, 'The password must be between 6-18 characters')
		.max(18, 'The password must be between 6-18 characters'),
});
