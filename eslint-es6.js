'use strict';

const spawn = require('child_process').spawn;

const shell = require('shelljs');

const chalk = require('chalk');

const path = require('path');

const moduleDir = __dirname;

const gulpPath = path.join(moduleDir, 'gulpfile.js');

const cwd = process.cwd();

if (!shell.which('gulp')) {
	process.stderr.write('please install [gulp] first.\n');
}

if (shell.exec(`export FORCE_COLOR='true'`).code !== 0) {
	process.stderr.write('export FORCE_COLOR => execution failed. \n');
}

if (shell.exec(`export CWD=${cwd}`).code !== 0) {
	process.stderr.write('export CWD => execution failed. \n');
}

if (shell.exec(`gulp --gulpfile ${gulpPath} 2>&1`).code !== 0) {
	process.stderr.write('gulp eslint-es6 => execution failed. \n');
}
