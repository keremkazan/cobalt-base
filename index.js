const { config } = require('cobalt-common');
const { getOptions, getCommand } = require('./lib/argv-manager.js');
const { loadGenerators } = require('cobalt-generator');

function run() {
  config.COMMANDS = {
    generate: loadGenerators(),
  };
  const options = getOptions();
  const command = getCommand(options);
  command(options);
}

module.exports = {
  config,
  run,
}
