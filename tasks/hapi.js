
'use strict';

var cleanPath = function(string) {
  var separator = '/';

  if (string.charAt(string.length - 1) !== separator) {
    return string + separator;
  }
   
  return string;
};

module.exports = function(grunt) {
   
  grunt.registerMultiTask('hapi', 'Start an Hapi web server.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      //debug: false,
      server: null,
      // filepath that points to a module that exports an Hapi server object
      bases: {'/': '.'}
    });

		options.debug = grunt.option('debug') || options.debug;

    if (options.server) {
      try {
        var http = require(options.server);

        if (options.bases) {
          for (var key in options.bases) {
            http.route({
              method: 'GET', path: cleanPath(key) + '{path*}',
              handler: {
                directory: {
                  path: options.bases[key], listing: true
                }
              }
            });
          }
        }
 
        http.start();
      } catch (e) {
        grunt.fatal('Hapi ["' + options.server + '"] -  ' + e);
      }
    } else {
      grunt.fatal('Hapi should provide an Hapi server instance.');
    }
  });
};
