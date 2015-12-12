'use strict';

const fs = require('fs');

fs.writeFile('./src/server/file-system/target.txt', 'a fun message', function (err) {
    if (err) {
        throw err;
    }
    console.log('File was saved!!!')
});
