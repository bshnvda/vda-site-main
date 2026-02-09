import { fields, singleton } from "@keystatic/core"

export const footer = singleton({
	label: "Настройки футера",
	path: "src/data/footer/",
	entryLayout: "form",
	format: "yaml",
	schema: {
		logoText: fields.text({
			label: "Текст логотипа",
			description: "Текст для src/components/Logo.astro",
			validation: { isRequired: true },
		}),
		links: fields.array(
			fields.object({
				label: fields.text({
					label: "Название ссылки",
					validation: { isRequired: true },
				}),
				link: fields.url({
					label: "Ссылка (URL)",
					validation: { isRequired: true },
				}),
			}),
			{
				label: "Ссылки в футере",
				description: "Можно добавлять, удалять и менять порядок ссылок",
				itemLabel: props => props.fields.label.value || "Новая ссылка",
			}
		),
	},
})
