/**
 * Remove underscores from a string
 * @method removeUnderscores
 * @param  {String} string
 * @return {string} returns the string without underscores
 * @example {{removeUnderscores 'first_name'}} // Output: 'first name'
 */
module.exports.removeUnderscores = function removeUnderscores(string = '') {
  return string.replace(/\_/ig, ' ');
};
