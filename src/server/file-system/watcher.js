'use strict';

const fs = require('fs');
fs.watch('./src/server/file-system/target.txt', function() {
    console.log("File 'target.txt just changed!");
});
console.log("Now watching target.txt for changes...");