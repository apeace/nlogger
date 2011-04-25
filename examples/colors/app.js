require.paths.unshift('../../lib');

var logger = require('nlogger').logger(module, true);

logger.info('Info message');
logger.debug('Debug message');
logger.warn('Warning message');
logger.error('Error message');
logger.trace('Trace message');
