const name = 'Luc';
const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('Connection Established');
    conn.write(`Name: ${name}`);
  })
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
