# grunt-hapi

> Start an Hapi web server using Grunt

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-hapi --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-hapi');
```

## The "hapi" task

### Overview
In your project's Gruntfile, add a section named `hapi` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  hapi: {
    custom_options: {
      options: {
        server: 'web',
        bases: {
          '/': '.'
        }
      }
    }
  }
})
```

### Options

#### options.server
Type: `String`
Default value: `null`

Filepath that points to a module that exports an Hapi server object

#### options.bases
Type: `Object
Default value: `{'/': '.'}`

Key/Value pair that associate a URI path from where you want to access static files with a FilePath that point to a directory where Hapi can find these static files.

#### options.noasync
Type: `Boolean`
Default value: `false`

By default, grunt-hapi is configured to be compatible with grunt-contrib-watch and launch the server as an asynchronous task.
If you just want to run `grunt hapi` and directly have access to your application, you can specify the `noasync` option at True. 

### Usage Examples

#### Yeoman.io friendly
In this example, the module `index.js` located in the `lib` directory will be use to start an instance of Hapi server. The files in the `public` directory will be available from `/public`

Also, thanks to [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch), the server will be restarted at every change.

Gruntfile.js:
```
...
grunt.initConfig({
  watch: {
    hapi: {
      files: ['lib/*.{js, coffee}'],
      tasks: ['hapi']
    }
  },
  hapi: {
    custom_options: {
      options: {
        server: require('path').resolve('./lib/index'),
        bases: {
          '/public': require('path').resolve('./public/')
        }
      }
    }
  }
});

grunt.registerTask('server', [
  'hapi',
  'watch'
]);
...
```

lib/index.js:
```
var Hapi = require('hapi');

var app = new Hapi.Server();

module.exports = app;
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Thanks
This project is highly inspired by [grunt-express](https://github.com/blai/grunt-express)
