/**
 * Simple example of inheritance in node
 * Similar to calling super in languages that support super()
 */

const events = require('events'),
    util = require('util');

TestClient = function (stream) {
    // call EventEmitter's constructor
    events.EventEmitter.call(this);
};

util.inherits(TestClient, events.EventEmitter);