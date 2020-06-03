const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '192.168.0.16',
    port: 50541,
    name: "REX"
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