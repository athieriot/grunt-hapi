
'use strict';

module.exports = function(grunt) {
   
  grunt.registerMultiTask('hapi', 'Start an Hapi web server.', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      //debug: false,
      server: null,
      bases: '.'
      // filepath that points to a module that exports an Hapi server object
    });

		options.debug = grunt.option('debug') || options.debug;

    if (grunt.util._.isArray(options.bases)) {
      options.bases = options.bases.join(',');
    }

    if (options.server) {
      try {
        var http = require(options.server);

        http.start();
      } catch (e) {
        grunt.fatal('Hapi ["' + options.server + '"] -  ' + e);
      }
    } else {
      grunt.fatal('Hapi should provide an Hapi server instance.');
    }
  });
};
