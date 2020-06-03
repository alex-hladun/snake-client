const net = require('net');
const constants = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: constants.host,
    port: constants.port
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    console.log("Connected to game server.");
    conn.write('Name: REX');
  });

  
  return conn;
};

console.log('Connecting ...');
// connect();

module.exports = { connect };