'use strict';

const spawn = require('child_process').spawn;

const shell = require('shelljs');

const chalk = require('chalk');

const path = require('path');

function get_config_path() {
  const pwd = shell.pwd().toString();

  const config_path = path.join(pwd, '.clienthooks');

  return config_path;
}

function get_gulp_eslint_config_path() {
  const config_path = get_config_path();

  const gulp_eslint_config_path = path.join(config_path, 'gulp-eslint.js');

  return gulp_eslint_config_path;
}

function get_config() {
  const config_path = get_gulp_eslint_config_path();

  let config;

  try {
    config = require(config_path);
  }
  catch (error) {
    const message = `${config_path} >> don't exist.`;

    const error = new ConfiguarationDontExistError();

    throw error;
  }

  return config;
}

function get_gulp_path() {
  const gulp_path = path.join(__dirname, '..', 'gulpfile.js');

  return gulp_path;
}

class ConfiguarationDontExistError extends Error {
  constructor(reason = '') {
    super(reason);
  }
}

module.exports = {
  get_config: get_config,
};
