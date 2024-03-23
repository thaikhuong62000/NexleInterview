import { z } from 'zod';

export const authSchema = z.object({
	expired: z.string().optional(),
	message: z.string().optional(),
	status: z.number().optional(),
});
