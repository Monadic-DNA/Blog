import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Monadic DNA Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
