import { collection, fields } from "@keystatic/core"

export const pageIndex = collection({
	label: "Главная страница",
	slugField: "title",
	path: "src/data/index/*",
	entryLayout: "content",
	columns: ["title"],
	format: {
		contentField: "content",
	},
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
		}),
		content: fields.mdx({
			label: "Контент",
		}),
	},
})
