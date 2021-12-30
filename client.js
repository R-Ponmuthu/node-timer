var express = require('express');
const io = require("socket.io-client");

const socket = io("https://54.243.238.66:443");

socket.on('timer', function (data) {
    // $('#counter').html(data.countdown);
    console.log('Count-'+data);
});
