const logEvent = require('./LogEvent');
const EventEmitter = require('events');

class MyEmitter extends Emitter {};

const myEmitter = new MyEmitter();

// listening the log events
myEmitter.on('log', msg => logEvent(msg));