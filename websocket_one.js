const io = require('socket.io')();
io.on('connection', client => { console.log("hello world") })
io.listen(3000)