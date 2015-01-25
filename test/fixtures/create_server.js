var Hapi = require('hapi');
          
var createServer = function(options) {
  // Create a server with specified options or defaults
  // NOTE: One could get more fancy and merge incoming options with some default options
  var server = new Hapi.Server();
  server.connection(options);

  server.route({ method: 'GET', path: '/', handler: test });

  function test(request, reply) {
    reply({ status: 'ok' });
  }
  
  return server;
}

module.exports = function(options) {
    return createServer(options);
};
