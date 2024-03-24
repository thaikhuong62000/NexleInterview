import { z } from 'zod';

export const SignUpResponse = z.object({
	id: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
	email: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	role: z.string(),
});
export type SignUpResponse = z.infer<typeof SignUpResponse>;

export const LoginResponse = z.object({
	user: z.object({
		id: z.number(),
		email: z.string(),
		firstName: z.string(),
		lastName: z.string(),
	}),
	accessToken: z.string(),
	refreshToken: z.string(),
});
export type LoginResponse = z.infer<typeof LoginResponse>;
