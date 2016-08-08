'use strict';

const spawn = require('child_process').spawn;

const shell = require('shelljs');

const chalk = require('chalk');

const path = require('path');

const moduleDir = __dirname;

const gulpPath = path.join(moduleDir, 'gulpfile.js');

process.env.FORCE_COLOR = 'true';

process.env.CWD = process.cwd();

if (!shell.which('gulp')) {
  process.stderr.write('please install [gulp] first.\n');
}

if (shell.exec(`gulp --gulpfile ${gulpPath} 2>&1`).code !== 0) {
  process.stderr.write('gulp eslint-es6 => execution failed. \n');
}
