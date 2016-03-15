/// <reference path="node_modules/angular2/bundles/angular2-polyfills.js" />
var gulp = require('gulp');

gulp.task('ng2', function () {
    
	gulp.src([
		"node_modules/angular2/bundles/angular2.dev.js",
		"node_modules/angular2/bundles/http.dev.js",
		"node_modules/angular2/bundles/router.dev.js",
		"node_modules/es6-promise/dist/es6-promise.js",
		"node_modules/es6-shim/es6-shim.js",
		"node_modules/rxjs/bundles/rx.js",
		"node_modules/systemjs/dist/system.js",
		"node_modules/angular2/bundles/angular2-polyfills.js",
		"node_modules/systemjs/dist/system-polyfills.js",

	])
		.pipe(gulp.dest("wwwroot/lib/ng2"));
});

gulp.task("bootstrap", function () {
	gulp.src(["lib/bootstrap/dist/*/*.*"]).pipe(gulp.dest("wwwroot/lib/bootstrap"));
});

gulp.task("jquery", function () {
	gulp.src(["lib/jquery/dist/*"]).pipe(gulp.dest("wwwroot/lib/jquery"));
});

gulp.task("fontawesome", function () {
	gulp.src([
		"lib/fontawesome/*/*.*",
		"!lib/fontawesome/.*",
		"!lib/fontawesome/*.*",
		"!lib/fontawesome/less/*.*",
		"!lib/fontawesome/scss/*.*"
		
	]).pipe(gulp.dest("wwwroot/lib/fontawesome"));
});