const gulp = require('gulp');
const ts = require('gulp-typescript');
const abspath = require('gulp-absolute-path');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('build', function(){
  return gulp.src(['src/**/*.ts'])
    .pipe(abspath({
      rootDir:'./src'
    }))
    .pipe(tsProject())
    .js 
    .pipe(gulp.dest('dist/'));
});

gulp.task('public', function(){
  return gulp.src(['src/static/*'])
    .pipe(abspath({
      rootDir:'./src'
    }))
    .pipe(gulp.dest('dist/static/'));
});

gulp.task('default', gulp.series('build', 'public'));
