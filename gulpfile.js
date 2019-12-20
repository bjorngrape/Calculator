
var gulp = require("gulp");
var autoprefix = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass');
var concat = require("gulp-concat");
sass.compiler = require('node-sass');
 
const CSS_PATH = "sass/**/*.scss";
//styles
 
 
gulp.task("styles", async function () {
   console.log("styles is running");
   return gulp.src(CSS_PATH)
       .pipe(plumber(function (err) {
           console.log("Styles error", err);
       }))
       .pipe(autoprefix())
       .pipe(sass().on('error', sass.logError))
       .pipe(concat("style.css"))
       .pipe(gulp.dest("public"))
 
})

//default
gulp.task("default", async function () {
   console.log("default task is running");
}) 
//gulp watch
 
gulp.task("watch", async function () {
   gulp.watch(CSS_PATH, gulp.series("styles"))
})
 
