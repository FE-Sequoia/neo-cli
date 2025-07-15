/**
 * commands/list.js
 * eg: neo upgrade
 * 升级脚手架 @neo/cli
 * 2022/07/18
 * by king
 */
const upgrade = require('../lib/upgrade');
module.exports = (program) => {
  program
    .command('upgrade')
    .description('Update @neo-aslan/cli')
    .action(() => {
      upgrade();
    });
};
