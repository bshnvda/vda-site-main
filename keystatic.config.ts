import { footer } from "@/fileds/footer";
import { pageIndex } from "@/fileds/pageIndex";
import { posts } from "@/fileds/posts";
import { tags } from "@/fileds/tags";
import { config } from "@keystatic/core";

// const isLocalMode = import.meta.env.DEV;

export default config({
	ui: {
		brand: { name: "ВДА группа БШН" },
	},
	storage:
		// { kind: "local" },
		{
			kind: "github",
			repo: "bshnvda/vda-site-main",
		},
	collections: {
		posts,
		pageIndex,
		tags,
	},
	singletons: {
		footer,
	},
});
