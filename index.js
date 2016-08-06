const spawn = require('child_process').spawn;

const path = require('path');

class EslintES6Plugin {
  constructor({ cwd = '' } = {}) {
    this[Symbol.for('pluginName')] = 'mvn-compile';
    this[Symbol.for('initProcess')]();
  }

  [Symbol.for('initProcess')]() {
    const moduleDir = __dirname;
    const scriptLocation = path.join(moduleDir, 'eslint-es6.js');

    this[Symbol.for('process')] = spawn('node', [scriptLocation]);
  }

  getProcess() {
    return this[Symbol.for('process')];
  }

  getPluginName() {
    return this[Symbol.for('pluginName')];
  }
};

module.exports = EslintES6Plugin;
