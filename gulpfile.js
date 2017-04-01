var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

var generalInput = './public/scss/*.scss';
var mainInput = './public/scss/main/*.scss';
var dashInput = './public/scss/dashboard/*.scss';
var output = './public/css';

gulp.task('default', ['sass_main', 'sass_dash', 'watch', 'nodemon']);

gulp.task('watch', function(){
  return gulp.watch(generalInput, ['sass_main', 'sass_dash'])
    .on('change', function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('sass_main', function () {
  return gulp.src(mainInput)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('master.css'))
    .pipe(gulp.dest(output));
});

gulp.task('sass_dash', function () {
  return gulp.src(dashInput)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('dashboard.css'))
    .pipe(gulp.dest(output));
});

gulp.task('nodemon', function(){
  nodemon({
    script: 'app.js',
    ext: 'js ejs json',
    env: {'NODE_ENV': 'development'}
  });
});
