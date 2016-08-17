'use strict';

const utils = require('./lib/utils');

const shell = require('shelljs');

const co = require('co');

shell.config.silent = true;

co(function *() {
  shell.cd('../../');

  // check logic
  utils.check('gulp-eslint.js');

  // copy logic
  yield utils.copy('gulp-eslint.js');

  // newline logic
  utils.newline();
});
