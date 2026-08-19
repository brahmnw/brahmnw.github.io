// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
  loader: glob({base: "./src/content/projects", pattern: "**/*.md"}),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    year: z.int(),
    link: z.string(),
    tags: z.array(z.string()),
    image: z.string(),

    featured: z.boolean().default(false),
    featuredOrder: z.number().default(0),

    hasPage: z.boolean().default(false)
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects }; 