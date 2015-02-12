//TODO GRUNT

///////////////////////////////////////////////////////////////////////////////////////
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify"); 
var concat = require("gulp-concat");
var compass = require("gulp-compass");
var minifycss = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var shell = require("gulp-shell");

///////////////////////////////////////////////////////////////////////////////////////
function browserifyBundler() {
    return browserify({
        entries: ["./_dev/js/main.jsx"],
        transform: [reactify],
        debug: true,
        cache: {}, 
        packageCache: {}, 
        fullPaths: true
    });
}

///////////////////////////////////////////////////////////////////////////////////////
function browserifyBundle(bundler) {
    bundler.bundle()
    .pipe(source("scripts.min.js"))
    // This is where you add uglifying etc.
    .pipe(gulp.dest("./assets/js/"));
    console.log("browserify finished");
}

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("copy-assets", function() {
    gulp.src("./bower_components/components-font-awesome/fonts/**/*.{ttf,woff,eof,svg}")
    .pipe(gulp.dest("./assets/fonts"));
});

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("scripts", function() {
    browserifyBundle(browserifyBundler());
});

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("watch-scripts", ["scripts"], function() {
    var bundler = browserifyBundler();
    bundler = watchify(bundler);
    bundler.on("update", function() {
        browserifyBundle(bundler);
    });
    browserifyBundle(bundler);
});

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("styles", function () {
    gulp.src("./_dev/scss/*.scss")
    .pipe(compass({
        sass: "./_dev/scss",
        css: "./assets/css",
        images: "./assets/img",
        require: ["sass-css-importer"]
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifycss())
    .pipe(gulp.dest("./assets/css/"));
    console.log("styles finished");
});

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("watch-styles", ["styles"], function () {
    gulp.watch("./_dev/scss/**/*.scss", ["styles"]);
});

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("install", shell.task([
  "bower cache clean && bower install",
  "echo yeah"
]));

///////////////////////////////////////////////////////////////////////////////////////
gulp.task("default", ["deploy", "watch-scripts", "watch-styles"]);
gulp.task("deploy", ["install", "scripts", "styles", "copy-assets"]);