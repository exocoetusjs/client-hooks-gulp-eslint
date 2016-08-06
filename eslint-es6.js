'use strict';

const spawn = require('child_process').spawn;

const shell = require('shelljs');

const path = require('path');

const moduleDir = __dirname;

const gulpPath = path.join(moduleDir, 'gulpfile.js');

shell.config.fatal = true;

try {
  if (!shell.which('gulp')) {
    process.stderr.write('please install [gulp] first.\n');
  }

  process.env.CWD = process.cwd();

  shell.exec(`gulp --gulpfile ${gulpPath} 2>&1`);
}
catch (error) {
  process.stderr.write(`${error}\n`);
}
