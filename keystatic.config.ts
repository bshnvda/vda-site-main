import { pageIndex } from "@/fileds/pageIndex"
import { posts } from "@/fileds/posts"
import { config } from "@keystatic/core"

export default config({
	storage: {
		kind: "github",
		repo: "shnvda/vda-site-main",
	},
	collections: {
		posts,
		pageIndex,
	},
})
