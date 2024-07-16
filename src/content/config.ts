// Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// Define a `type` and `schema` for each collection

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const filedCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    intro: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      author: z.string(),
      image: z
        .object({
          url: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  blogs: blogCollection,
};
