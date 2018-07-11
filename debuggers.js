const debug = require('debug');
// FYI: keep the root namespace 'toggling-logs' the same across all debuggers
// change the part after the ':'
const logger = debug('toggling-logs:server');
const errorLogger = debug('toggling-logs:error');

module.exports = {
  logger,
  errorLogger
}