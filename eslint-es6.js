'use strict';

const shell = require('shelljs');

const chalk = require('chalk');

const path = require('path');

const gulpPath = path.join(__dirname, 'gulpfile.js');

process.env.FORCE_COLOR = 'true';

process.env.CWD = process.cwd();

if (!shell.which('gulp')) {
  process.stderr.write('please install [gulp] first.\n');
}

if (shell.exec(`gulp --gulpfile ${gulpPath} 2>&1`).code !== 0) {
  process.stderr.write('gulp eslint-es6 => execution failed. \n');
}
