'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('test', function(){
  gulp.src('./test/*-test.js', {read:false})
  .pipe(mocha({reporter:'spec'}));
});//end test task

gulp.task('lint', function(){
  return gulp.src(['**/*.js', '!node_modules'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});//end lint task

gulp.task('default', ['test', 'lint']);
