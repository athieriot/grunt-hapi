
'use strict';

module.exports = function(grunt) {

  var running;
   
  grunt.registerMultiTask('hapi', 'Start an Hapi web server.', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      server: null,
      bases: {'/': '.'},
      noasync: false
    });

    if (running !== undefined) {
      running.disconnect();
    }
  
    // Starting a child process to launch the server in
    running = require('child_process').fork(__dirname + '/../lib/forkme');
    running.send(options);

    // Handle errors or success happening in the child process
    running.on('message', function(error) {
      if (error) {
        grunt.fatal(error);
      }

      done();
    });

    process.on('exit', function() {
      if (running !== undefined) {
        running.disconnect();
      }
    });
  });
};
