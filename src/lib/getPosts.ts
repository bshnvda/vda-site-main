import { getCollection } from "astro:content"

// Вывод постов по новым датам и по статусу draft

export const getAllPosts = async content => {
	const posts = (await getCollection(content))
		.filter(({ data }) => (import.meta.env.PROD ? data.draft !== true : true))
		// "2024-02-21T15:30:00Z"
		//	datePublished: z.union([z.string().datetime(), z.date()]),
		.sort((a, b) => +new Date(b.data.pubDate) - +new Date(a.data.pubDate))
	return posts
}
