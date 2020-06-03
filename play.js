// const net = require('net');
const connect = require('./client');
const { setupInput } = require('./input');

// "Update play.js to send the connection object returned from conect
// into our setupInput function"
setupInput(connect.connect());