var express = require('express');
const io = require("socket.io-client");

const socket = io("your ipaddress here");

socket.on('timer', function (data) {
    // $('#counter').html(data.countdown);
    console.log('Count-'+data);
});
