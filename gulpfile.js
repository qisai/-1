var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver")
var gulify = require("gulify");
gulp.task("sass",function(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest("./src/sass/"))
})
gulp.task("webserver",function(){
    return gulp.src('./src/')
    .pipe(webserver({
        port: 8080,
        host: "localhost",
        livereload: true
    }))
})
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', gulp.series('sass'))
})
gulp.task('dev', gulp.series("sass", "webserver", "watch"));