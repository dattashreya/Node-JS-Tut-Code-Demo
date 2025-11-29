// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));
// console.log(uuid());
const winston = require('winston');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Set the default log level
  format: winston.format.json(), // Log in JSON format
  transports: [
    new winston.transports.Console(), // Output to console
    new winston.transports.File({ filename: 'app.log' }) // Output to a file
  ],
});

// Log various events
logger.info('User logged in', { userId: 123, username: 'exampleUser' });
logger.warn('Failed login attempt', { ipAddress: '192.168.1.1' });
logger.error('Database connection failed', { error: 'Connection refused' });