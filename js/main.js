var helpers = require('./helpers.js');

var BoxfishHelpers = {};

for (var helper in helpers) {
  BoxfishHelpers[helper] = helpers[helper];
}
