export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","manifest.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.amBvFIaY.js","app":"_app/immutable/entry/app.QApF9aXV.js","imports":["_app/immutable/entry/start.amBvFIaY.js","_app/immutable/chunks/entry.wYy-x6vU.js","_app/immutable/chunks/scheduler.i0dFsvd6.js","_app/immutable/entry/app.QApF9aXV.js","_app/immutable/chunks/scheduler.i0dFsvd6.js","_app/immutable/chunks/index.ZAnNkgCY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
