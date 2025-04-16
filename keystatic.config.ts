import { pageIndex } from "@/fileds/pageIndex"
import { posts } from "@/fileds/posts"
import { config } from "@keystatic/core"

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts,
		pageIndex,
	},
})
