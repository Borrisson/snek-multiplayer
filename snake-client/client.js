const net = require('net');
const { IP, PORT, NAME } = require('./constants');
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    console.log('Connection Established');
    conn.write(`Name: ${NAME}`);

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.setTimeout(15000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
    conn.end();
  });
  return conn;
}

module.exports = { connect };
