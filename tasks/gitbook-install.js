module.exports = function(grunt) {
    var fs = require('fs'),
      gitbook = require('gitbook'),
      path = require('path');

    grunt.registerMultiTask('gitbook-install', 'gitbook install', function() {
      
      var done = this.async();
      
      gitbook.generate.Plugin.install(this.data).done();
      
    });
};