'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
var countdown = 181000;

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(function() {
  countdown=countdown-1000;
  io.emit('timer', { countdown: countdown });
  if(countdown == 0){
    countdown = 181000
  }
}, 1000);


// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
