var Hapi = require('hapi');

// Create a server on localhost port 3000
var server = new Hapi.Server('localhost', 3000);

server.route({ method: 'GET', path: '/', handler: test });

function test() {
  this.reply({ status: 'ok' });
}

module.exports = server;
