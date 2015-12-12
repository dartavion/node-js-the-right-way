'use strict';

const fs = require('fs');
fs.readFile('./src/server/file-system/target.txt', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
