process.on('uncaughtException', function (err) {
    console.log("error occur : ", err)
});

const io = require('socket.io')();
io.on('connection', client => { console.log("hello world") });
try {
    io.listen(3000)
} catch(err) {
    console.log(err)
}