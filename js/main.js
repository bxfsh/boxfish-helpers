var helpers = require('./helpers.js');

// Create a wrapper for the helpers
BoxfishHelpers = {};

// Add each helper to the BoxfishHelpers object
for (var helper in helpers) {
  BoxfishHelpers[helper] = helpers[helper];
}

// Expose BoxfishHelpers as global object
module.exports = BoxfishHelpers;
