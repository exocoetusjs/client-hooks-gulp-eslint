const fork = require('child_process').fork;

const path = require('path');

class GulpEslintPlugin {
  constructor({ cwd = '' } = {}) {
    this[Symbol.for('initProcess')]();
  }

  getProcess() {
    return this[Symbol.for('process')];
  }

  [Symbol.for('initProcess')]() {
    const modulePath = path.join(__dirname, 'lib', 'gulp-eslint.js');

    this[Symbol.for('process')] = fork(modulePath, [], { silent: true });
  }
};

module.exports = GulpEslintPlugin;
