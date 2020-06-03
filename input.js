const stdin = process.stdin;
// put here to initialize. Will re-assign later.
let connection;
const {
  host,
  port,
  MOVE_RIGHT_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_UP_KEY,
  MESSAGE_1_KEY,
  MESSAGE_2_KEY,
  MESSAGE_3_KEY,
  QUIT_KEY,
  MESSAGE_1,
  MESSAGE_2,
  MESSAGE_3 } = require('./constants');

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
  case QUIT_KEY:
    console.log("Thanks for using me, ciao!");
    process.exit();
    break;
  case MOVE_UP_KEY:
    connection.write("Move: up");
    // console.log("w Key");
    break;
  case MOVE_LEFT_KEY:
    connection.write("Move: left");
    // console.log("a key");
    break;
  case MOVE_DOWN_KEY:
    connection.write("Move: down");
    // console.log("s key");
    break;
  case MOVE_RIGHT_KEY:
    connection.write("Move: right");
    // console.log("D key");
    break;
  case MESSAGE_1_KEY:
    connection.write(MESSAGE_1);
    // console.log("D key");
    break;
  case MESSAGE_2_KEY:
    connection.write(MESSAGE_2);
    // console.log("D key");
    break;
  case MESSAGE_3_KEY:
    connection.write(MESSAGE_3);
    // console.log("D key");
    break;
  }
};

module.exports = { setupInput };