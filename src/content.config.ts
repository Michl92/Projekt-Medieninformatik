import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const historie = defineCollection({
  loader: glob({ 
    pattern: '**/[^_]*.{md,mdx}', 
    base: "./src/content/historie" 
  }),
schema: ({ image }) => z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  twitchClipId: z.string().optional(),
  youtubeVideoId: z.string().optional(),
  gallery: z.array(image()).optional(),
  cover: image().optional(),
  milestone: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
}),
});

const sections = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sections" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    backgroundImage: image(),
    ctaText: z.string().optional(),
    ctaUrl: z.string().url().optional(),
  }),
});

const stats = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sections" }),
  schema: z.object({
        // Felder für die Stats-Sektion (dynamisch via API)
    stats: z.array(z.object({
      label: z.string(),
      apiField: z.string(),
      suffix: z.string().default(""),
    })).optional(),
  }),
});

export const collections = { historie, sections, stats };