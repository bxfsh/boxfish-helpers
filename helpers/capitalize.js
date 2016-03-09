/**
 * Capitalize a string
 * @method capitalize
 * @param  {String} string
 * @return {String} Returns the capitalized string
 * @example {{capitalize firstName}}
 */
module.exports.capitalize = function capitalize(string = '') {
  string = string.toLowerCase();

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return match.toUpperCase();
  });
};
