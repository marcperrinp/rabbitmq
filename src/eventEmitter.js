const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('FOREST_ADMIN_EVENT', () => {
  console.log('Event: FOREST_ADMIN_EVENT');
});

module.exports = myEmitter;