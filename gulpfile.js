var gulp = require('gulp')
    ,webserver = require('gulp-webserver')
    ,browserSync = require('browser-sync').create()
    ,jshint = require('gulp-jshint')
    ,stylish = require('jshint-stylish')
    ;


gulp.task('scripts', function (){
    return gulp.src( ['./src/public/js/**/*.js'] )
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
  
gulp.task('watch', function (){
    return gulp.watch( './src/public/js/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
  gulp.src('./src')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      port: 8082,
      host:'0.0.0.0',
      path:"./src/"
    }));
});


gulp.task('serve', ['webserver', 'watch'], function () {
   browserSync.init({
        server: "./",
        port: 8082
    });

  gulp.watch("./src/*.html").on('change', browserSync.reload);
});

