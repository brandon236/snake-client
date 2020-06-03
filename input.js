let connection;

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0077') {
      connection.write('Move: up');
    }
    if (key === '\u0073') {
      connection.write('Move: down');
    }
    if (key === '\u0061') {
      connection.write('Move: left');
    }
    if (key === '\u0064') {
      connection.write('Move: right');
    }
    if (key === '\u006f') {
      connection.write( 'Say: Wooooo.');
    }
    if (key === '\u0070') {
      connection.write( 'Say: 01101000101');
    }
    if (key === '\u006c') {
      connection.write( 'Say: Base 12 is the best.');
    }
    if (key === '\u0003') {
      process.exit();
    }
  })
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

module.exports = setupInput;
