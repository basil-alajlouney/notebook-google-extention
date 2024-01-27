

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1XhJ-CGn.js","_app/immutable/chunks/scheduler.i0dFsvd6.js","_app/immutable/chunks/index.ZAnNkgCY.js"];
export const stylesheets = ["_app/immutable/assets/2.TFPiPDER.css"];
export const fonts = [];
