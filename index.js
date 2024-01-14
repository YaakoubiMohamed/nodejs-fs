
const fs = require('fs');
const { setInterval } = require('timers');


let content = '';
let timeout;
function readFile() {
    fs.watchFile('fs.txt', (current, previouse) => {
        if (current.mtime !== previouse.mtime) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fs.readFile('fs.txt', 'UTF8', (err, data) => {
                    if (err) {
                        console.log('error reading the file', err);
                    }
                    else {
                        content = data;
                        console.log(' file content updated: ' + content);
                    }
                })
            }, 100);
        }
    })
}
const readupdate = setInterval(readFile, 5000);