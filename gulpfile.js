var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var input = './public/scss/*.scss';
var output = './public/css';

gulp.task('default', ['sass', 'watch', 'nodemon']);

gulp.task('watch', function(){
  return gulp.watch(input, ['sass'])
    .on('change', function(event){
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(output));
});

gulp.task('nodemon', function(){
  nodemon({
    script: 'app.js',
    ext: 'js ejs',
    env: {'NODE_ENV': 'development'}
  });
});
