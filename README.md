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
    options: {
      server: 'web'
    }
  }
})
```

### Options

#### options.server
Type: `String`
Default value: `null`

Filepath that points to a module that exports an Hapi server object

### Usage Examples

#### Custom Options
In this example, the module `index.js` located in the `lib` directory will be use to start an instance of Hapi server.

```js
grunt.initConfig({
  hapi: {
    options: {
      server: 'lib/index',
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
