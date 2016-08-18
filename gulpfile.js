const eslint = require('gulp-eslint');

const path = require('path');

const gulp = require('gulp');

gulp.task('eslint', () => {
  // get configuration parameters.
  const config = JSON.parse(process.env.config);
  // ESLint ignores files with "node_modules" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src(config.gulp.src.globs, config.gulp.src.options)
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint(config.eslint.constructor))
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['eslint'], function () {
    // This will only run if the lint task is successful...
});
