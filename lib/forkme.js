'use strict';

var Utils = require('./utils');

process.on('message', function(options) {

  if (options.server) {
    try {
      var http = require(options.server);

      if (options.bases) {
        for (var key in options.bases) {
          http.route({
            method: 'GET', path: Utils.cleanPath(key) + '{path*}',
            handler: {
              directory: {
                path: options.bases[key], listing: true
              }
            }
          });
        }
      }

      http.start();

      process.send(null);
    } catch (e) {
      process.send('Hapi ["' + options.server + '"] -  ' + e);
    }
  } else {
    process.send('Hapi should provide an Hapi server instance.');
  }
});

process.on('disconnect', function() {
  process.exit();
});
