var net = require('net');

var port = process.argv[2];

var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (Number(date.getMonth()) + 1).toString();
    month = month.length === 2 ? month : '0' + month;
    var day = date.getDate();
    day = day.length === 2 ? day : '0' + day;
    var hour = date.getHours();
    var minute = date.getMinutes();
    socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n');
    socket.end();
});

server.listen(port);