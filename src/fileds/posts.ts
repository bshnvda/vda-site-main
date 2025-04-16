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
		tags: fields.multiselect({
			label: "Теги к посту",
			description: "Выберите теги",
			options: [
				{ label: "12 шагов", value: "12 шагов" },
				{ label: "12 традиций", value: "12 традиций" },
				{ label: "Семинар", value: "Семинар" },
				{ label: "Спонсор", value: "Спонсор" },
				{ label: "Новости", value: "Новости" },
				{ label: "Черты ВДА", value: "Черты ВДА" },
				{ label: "Программа ВДА", value: "Программа ВДА" },
				{ label: "Информация", value: "Информация" },
				{ label: "Для групп", value: "Для групп" },
				{ label: "Инструменты", value: "Инструменты" },
				{ label: "Руководство", value: "Руководство" },
			],
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
