const stdin = process.stdin;
// put here to initialize. Will re-assign later.
let connection;
const {
  host,
  port,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MOVE_UP_KEY } = require('./constants');

console.log("Move down key: ", MOVE_DOWN_KEY);

const setupInput = function(conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
stdin.on('data', (key) => handleUserInput(key));

setupInput();

const handleUserInput = (key) => {
  switch (key) {
  case '\u0003':
    console.log("Thanks for using me, ciao!");
    process.exit();
    break;
  case '\u0077':
    connection.write("Move: up");
    // console.log("w Key");
    break;
  case '\u0061':
    connection.write("Move: left");
    // console.log("a key");
    break;
  case '\u0073':
    connection.write("Move: down");
    // console.log("s key");
    break;
  case '\u0064':
    connection.write("Move: right");
    // console.log("D key");
    break;
  case '\u0031':
    connection.write("Say: LEEEROY JENKINS!!!");
    // console.log("D key");
    break;
  case '\u0032':
    connection.write("Say: Please move!");
    // console.log("D key");
    break;
  }
};

module.exports = { setupInput };