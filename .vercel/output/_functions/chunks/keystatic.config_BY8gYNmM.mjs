import { singleton, fields, collection, config as config$1 } from '@keystatic/core';

const footer = singleton({
  label: "Настройки футера",
  path: "src/data/footer/",
  entryLayout: "form",
  format: "yaml",
  schema: {
    logoText: fields.text({
      label: "Текст логотипа",
      description: "Текст для src/components/Logo.astro",
      validation: { isRequired: true }
    }),
    links: fields.array(
      fields.object({
        label: fields.text({
          label: "Название ссылки",
          validation: { isRequired: true }
        }),
        link: fields.url({
          label: "Ссылка (URL)",
          validation: { isRequired: true }
        })
      }),
      {
        label: "Ссылки в футере",
        description: "Можно добавлять, удалять и менять порядок ссылок",
        itemLabel: (props) => props.fields.label.value || "Новая ссылка"
      }
    )
  }
});

const pageIndex = collection({
  label: "Главная страница",
  slugField: "title",
  path: "src/data/index/*",
  entryLayout: "content",
  columns: ["title"],
  format: {
    contentField: "content"
  },
  schema: {
    title: fields.slug({ name: { label: "Заголовок" } }),
    description: fields.text({
      label: "Описание",
      description: "от 20 до 150 символов"
    }),
    content: fields.mdx({
      label: "Контент"
    })
  }
});

const posts = collection({
  label: "Посты",
  slugField: "title",
  path: "src/data/posts/*",
  entryLayout: "content",
  columns: ["title", "pubDate", "favorite"],
  format: {
    contentField: "content"
  },
  schema: {
    title: fields.slug({ name: { label: "Заголовок" } }),
    description: fields.text({
      label: "Описание",
      description: "от 20 до 150 символов",
      validation: { length: { min: 20, max: 150 } }
    }),
    pubDate: fields.date({
      label: "Время",
      description: "Время публикации",
      defaultValue: {
        kind: "today"
      }
    }),
    tags: fields.multiRelationship({
      label: "Теги к посту",
      description: "Выберите существующие теги или создайте новые в разделе «Теги»",
      collection: "tags"
    }),
    ogImage: fields.image({
      label: "Изображение поста",
      directory: "src/assets/images/posts",
      publicPath: "../../assets/images/posts/"
    }),
    favorite: fields.checkbox({
      label: "Избранный пост",
      description: "Избранный пост в начале"
    }),
    content: fields.mdx({
      label: "Контент"
    })
  }
});

const tags = collection({
  label: "Теги",
  slugField: "title",
  path: "src/data/tags/*",
  entryLayout: "form",
  format: "yaml",
  columns: ["title"],
  schema: {
    title: fields.slug({
      name: { label: "Название тега" },
      label: "Тег"
    })
  }
});

const config = config$1({
  ui: {
    brand: { name: "ВДА группа БШН" }
  },
  storage: {
    kind: "github",
    repo: "bshnvda/vda-site-main"
  },
  collections: {
    posts,
    pageIndex,
    tags
  },
  singletons: {
    footer
  }
});

export { config as c };
