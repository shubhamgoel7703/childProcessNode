var spawn = require('child_process').spawn;

let bear = 1;

if (process.argv[2] === 'child') {
    console.log("inside child process");
    var net = require('net');
    var pipe = new net.Socket({ fd: 3 });

    pipe.write('killme' + bear);
} else {
    var child = spawn(process.execPath, [__filename, 'child'], {
        stdio: [null, null, null, 'pipe']
    });
    child.stdio[3].on('data', function (data) {
        console.log("data ", data.toString());
    })
}