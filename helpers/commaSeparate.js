/**
 * Returns an array list separated by commas
 * @method commaSeparate
 * @param  {Array} array
 * @param  {String} separator - default: ', '
 * @return {String} Returns the formatted string
 * @example {{commaSeparate genres}}
 */
module.exports.commaSeparate = function commaSeparate(array = [], separator, options) {

  if (arguments.length > 2) {
    return array.join(separator);
  } else {
    var separator = ', ';
    return array.join(separator);
  }
};

module.exports.join = module.exports.commaSeparate;
