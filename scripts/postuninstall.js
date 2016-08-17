'use strict';

const utils = require('./lib/utils');

const shell = require('shelljs');

shell.cd('../../');

utils.remove('gulp-eslint.js');

utils.newline();
