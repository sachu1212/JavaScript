var events = require('events');
var eventEmitter = new events.EventEmitter();

var doit = function () {
	console.log('I hate you my friend!!');
}

eventEmitter.on('latecomming', doit);
eventEmitter.emit('latecomming');