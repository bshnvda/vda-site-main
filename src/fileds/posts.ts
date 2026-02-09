import { collection, fields } from "@keystatic/core"

export const posts = collection({
	label: "Посты",
	slugField: "title",
	path: "src/data/posts/*",
	entryLayout: "content",
	columns: ["title", "pubDate", "favorite"],
	format: {
		contentField: "content",
	},
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
			validation: { length: { min: 20, max: 150 } },
		}),
		pubDate: fields.date({
			label: "Время",
			description: "Время публикации",
			defaultValue: {
				kind: "today",
			},
		}),
		tags: fields.multiRelationship({
			label: "Теги к посту",
			description: "Выберите существующие теги или создайте новые в разделе «Теги»",
			collection: "tags",
		}),
		ogImage: fields.image({
			label: "Изображение поста",
			directory: "src/assets/images/posts",
			publicPath: "../../assets/images/posts/",
		}),
		favorite: fields.checkbox({
			label: "Избранный пост",
			description: "Избранный пост в начале",
		}),
		content: fields.mdx({
			label: "Контент",
		}),
	},
})
