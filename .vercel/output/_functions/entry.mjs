import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CvqDm-OV.mjs';
import { manifest } from './manifest_DOCdKsJr.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/posts.astro.mjs');
const _page5 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page6 = () => import('./pages/robots.txt.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const _page9 = () => import('./pages/_---page_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page3],
    ["src/pages/posts/index.astro", _page4],
    ["src/pages/posts/[...slug].astro", _page5],
    ["src/pages/robots.txt.ts", _page6],
    ["src/pages/tags/[tag].astro", _page7],
    ["src/pages/index.astro", _page8],
    ["src/pages/[...page].astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6aa758be-5c6a-4ef5-bb63-2314199a4ceb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
