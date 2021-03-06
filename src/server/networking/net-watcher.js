'use strict';
/**
 *
 * telnet localhost 5432
 */
const fs = require('fs'),
    net = require('net'),
    filename = process.argv[2],
    server = net.createServer(function (connection) {
        console.log('Subscriber connected.');
        connection.write(`Now Watching ${filename} for changes`);
        let watcher = fs.watch(filename, function () {
            connection.write(`File ${filename} changed: ${Date.now()}`);
        });
        connection.on('close', function () {
            console.log('Subscriber disconnected.');
            watcher.close();
        });
    });

if (!filename) {
    throw Error('No target filename was specified.');
}

server.listen(5432, function () {
    console.log('Listening for subscribers...');
});

