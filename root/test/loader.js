// DO NOT EDIT - this file is automatically generated by running grunt generate:loaders
(function() {
  var tests = [], conf = {"baseUrl":"/base/src/js","paths":{"backbone":"../../bower_components/backbone/backbone","bootstrap":"../../bower_components/bootstrap/dist/js/bootstrap.min","handlebars":"../../bower_components/handlebars/handlebars.runtime","jquery":"../../bower_components/jquery/dist/jquery","lodash":"../../bower_components/lodash/dist/lodash","modernizr":"../../bower_components/modernizr/modernizr","underscore":"../../bower_components/underscore/underscore"},"shim":{"bootstrap":["jquery"],"handlebars":{"exports":"Handlebars"},"jquery":{"exports":"$"},"modernizr":{"exports":"Modernizr"}}};
  for (var file in window.__karma__.files) {
    if (/\.spec\.js$/.test(file)) tests.push(file);
  }
  conf.deps = tests;
  conf.callback = window.__karma__.start;
  require.config(conf);
})();