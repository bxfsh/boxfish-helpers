/**
 * This file is used to parse the comments from each helper file
 * and render the documentation.
 */

var comp = require('./package.json');
var parse = require('comment-parser');
var _ = require('lodash');
var fs = require('fs');
var helpers = require('./js/helpers.js');
var Handlebars = require('handlebars');

// Register Handlebars helpers
Handlebars.registerHelper(helpers);

parse.file('js/helpers.js', function (err, helpers) {
  helpers = getParameters(helpers);
  helpers = getMethodNames(helpers);
  helpers = getExamples(helpers);

  fs.readFile('docs/index.hbs', 'utf8', function (err, source) {
    if (err) throw err;
    var template = Handlebars.compile(source);
    var html = template({
      helpers: helpers,
      package: comp,
    });

    fs.writeFile('docs/index.html', html, function (err) {
      if (err) throw err;
      console.log('Documentation successfully generated');
    });
  });
});

function getMethodNames(helpers) {
  _.each(helpers, function (helper) {
    _.each(helper.tags, function (tag) {
      if (tag.tag === 'method') {
        helper.name = tag.name;
      }
    });
  });

  return helpers;
}

function getParameters(helpers) {
  var tags;

  _.each(helpers, function (helper) {
    helper.params = [];

    tags = helper.tags;
    _.each(tags, function (tag) {
      if (tag.tag === 'param') {
        helper.params.push(tag);
      }
    });
  });

  return helpers;
}

function getExamples(helpers) {
  _.each(helpers, function (helper) {
    _.each(helper.tags, function (tag) {
      if (tag.tag === 'example') {
        helper.example = tag.source.replace('@example ', '');
      }
    });
  });

  return helpers;
}
