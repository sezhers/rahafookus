import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.enum([
				"investeerimine",
				"laenud-ja-krediit",
				"nutikas-pangandus",
				"rahatarkus",
				"saastmine-ja-eelarve",
				"krypto",
			]),
			// Valikuline — kui postitusel puudub, kasutame layoutis vaikimisi "sergei".
			author: z.string().optional(),
			// Valikuline KKK-plokk — renderdatakse postituse lõppu ja kasutatakse
			// FAQPage structured data (JSON-LD) genereerimiseks.
			faq: z
				.array(
					z.object({
						question: z.string(),
						answer: z.string(),
					}),
				)
				.optional(),
		}),
});

export const collections = { blog };
