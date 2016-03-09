/**
 * Returns an array list separated by commas
 * @method commaSeparate
 * @param  {Array} array
 * @return {String} Returns the formatted string
 * @example {{commaSeparate genres}}
 */
module.exports.commaSeparate = function commaSeparate(array = []) {
  return array.join(', ');
};
