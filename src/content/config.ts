// See fail läheb src/content/config.ts (või uuemas Astro versioonis src/content.config.ts)
// Kui sul on juba selline fail olemas, lisa lihtsalt "category" väli oma
// olemasolevasse schemasse, ära kirjuta kogu faili üle.

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum([
      "investeerimine",
      "laenud-ja-krediit",
      "nutikas-pangandus",
      "rahatarkus",
      "saastmine-ja-eelarve",
      "krypto",
    ]),
  }),
});

export const collections = { blog };
