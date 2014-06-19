var express = require('express'),
app         = express(),
server      = require('http').createServer(app),
io          = require('socket.io')(server),
_           = require('underscore');

app.use(express.static(__dirname + '/frontend'));

setInterval(function() {
  data = { 'depth': Math.floor(Math.random() * 100) };
  io.emit('depth:value', data );
  //console.log('emitted ' + data);
}, 100);

io.on('test', function(data) {console.log(data);});

server.listen(8000);
