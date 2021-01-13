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
  case 'w':
    connection.write('Move: up');
    break;
  case 'd':
    connection.write('Move: down');
    break;
  case 'a':
    connection.write('Move: left');
    break;
  case 's':
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
