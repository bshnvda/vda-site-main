import { footer } from "@/fileds/footer";
import { pageIndex } from "@/fileds/pageIndex";
import { posts } from "@/fileds/posts";
import { tags } from "@/fileds/tags";
import { config } from "@keystatic/core";

const isLocalMode =
	process.env.NODE_ENV !== "production" ||
	process.env.KEYSTATIC_LOCAL === "true";
const hasGithubEnv =
	Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID) &&
	Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET) &&
	Boolean(process.env.KEYSTATIC_SECRET) &&
	Boolean(process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG);

export default config({
	ui: {
		brand: { name: "ВДА группа БШН" },
	},
	storage: isLocalMode || !hasGithubEnv
		? { kind: "local" }
		: {
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
