import { z } from 'zod';

export const Categories = z.object({
	id: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
	name: z.string(),
	firstName: z.string(),
});
export type Categories = z.infer<typeof Categories>;
