import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import keystatic from "@keystatic/astro"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import metaTags from "astro-meta-tags"
import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel"

export default defineConfig({
	site: "https://vdaru.ru",

	vite: {
		plugins: [tailwindcss()],
	},

	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},

	integrations: [mdx(), keystatic(), sitemap(), icon(), metaTags(), react()],
	output: "static",
	adapter: vercel(),
})
