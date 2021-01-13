const setupInput = function () {
  const stdin = process.stdin;
  stdin.on('data', (data) => {
    handleUserInput(data);
  })
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
setupInput();

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };
