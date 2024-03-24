import { z } from 'zod';

export const Category = z.object({
	id: z.number(),
	createdAt: z.string(),
	updatedAt: z.string(),
	name: z.string(),
});
export type Category = z.infer<typeof Category>;

export const Categories = z.array(Category);
export type Categories = z.infer<typeof Categories>;
