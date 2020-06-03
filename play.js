const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '<IP ADDRESS HERE>',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  return conn;
};

console.log('Connecting ...');
connect();


//////

// client.js