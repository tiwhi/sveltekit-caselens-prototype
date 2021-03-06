const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/Search/index.svelte"),
	() => import("../../src/routes/Search/[opinion_id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/Search/index.svelte
	[/^\/Search\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/Search/[opinion_id].svelte
	[/^\/Search\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ opinion_id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];