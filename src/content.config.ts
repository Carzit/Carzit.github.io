import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    // Force the title's line break after this phrase (wide screens only break here).
    titleBreakAfter: z.string().optional(),
    authors: z.array(z.string()),
    status: z.enum([
      'published', 'accepted', 'revision', 'under-review',
      'preprint', 'working-paper', 'in-progress',
    ]),
    // Shown instead of the generic status label, e.g. "R&R, Management Science".
    statusLabel: z.string().optional(),
    // One sentence: the headline result. Left out for work in progress.
    finding: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string().url(),
    })).default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, research };
