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
    ctaUrl: z.url().optional(),
  }),
});

export const collections = { historie, sections};