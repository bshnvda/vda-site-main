import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const posts = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/posts/" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			ogImage: image().optional(),
			pubDate: z.union([z.string(), z.date()]),
			tags: z.array(z.string()).optional(),
			favorite: z.boolean().default(false).optional(),
		}),
})

const pageIndex = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/index/" }),
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
	}),
})

const tags = defineCollection({
	loader: glob({ pattern: "**/*.yaml", base: "./src/data/tags/" }),
	schema: z.object({
		title: z.string(),
	}),
})

const pages = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/pages/" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// keyswords: z.string().default("").optional(),
		ogImage: z.any().optional(),
	}),
})

export const collections = { posts, pages, pageIndex, tags }
