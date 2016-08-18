'use strict';

const utils = require('./utils');

const shell = require('shelljs');

const chalk = require('chalk');

const path = require('path');

// init env variables
function initEnvironment() {
  const config = utils.get_config();

  // passing config to `gulpfile.js`.
  process.env.config = JSON.stringify(config);

  // colorized process output.
  process.env.FORCE_COLOR = 'true';
}

// main logic
function main() {
  const gulpPath = utils.get_gulp_path();

  initEnvironment();

  if (!shell.which('gulp')) {
    process.stderr.write('please install [gulp] first.\n');
  }

  if (shell.exec(`gulp --gulpfile ${gulpPath} 2>&1`).code !== 0) {
    process.stderr.write('gulp eslint => execution failed. \n');
  }
}

main();
