const { MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MOVE_UP_KEY } = require('./constants');
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
setupInput();

const handleUserInput = function(key) {
  switch (key) {
  case '\u0003':
    process.exit();
    break;
  case MOVE_UP_KEY:
    connection.write('Move: up');
    break;
  case MOVE_DOWN_KEY:
    connection.write('Move: down');
    break;
  case MOVE_LEFT_KEY:
    connection.write('Move: left');
    break;
  case MOVE_RIGHT_KEY:
    connection.write('Move: right');
    break;
  case 'y':
    connection.write("Say: They see me Rollin' ");
    break;
  case 'u':
    connection.write("Say: They hatin'            ");
    break;
  }
};

module.exports = { setupInput };
