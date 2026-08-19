// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const moreProjects = defineCollection({
  loader: file("./src/content/moreProjects.json"),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    image: z.string()
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { moreProjects };