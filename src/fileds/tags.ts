import { collection, fields } from "@keystatic/core"

export const tags = collection({
	label: "Теги",
	slugField: "title",
	path: "src/data/tags/*",
	entryLayout: "form",
	format: "yaml",
	columns: ["title"],
	schema: {
		title: fields.slug({
			name: { label: "Название тега" },
			label: "Тег",
		}),
	},
})
