'use strict';

const shell = require('shelljs');

shell.config.fatal = true;

try {
  if (!shell.which('gulp')) {
    process.stderr.write('please install [gulp] first.\n');
  }

  if (shell.exec('gulp eslint-es6').code !== 0) {
    process.stderr.write('gulp eslint-es6 >> execution failed.\n');
  }
}
catch (error) {
  process.stderr.write(`${error}\n`);
}
