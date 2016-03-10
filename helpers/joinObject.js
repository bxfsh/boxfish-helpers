/**
 * Join each array item property
 * @method joinObject
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} separator - the string separator
 * @param  {Object} options
 * @return {String} returns a string
 *
 * @example {{joinObject posts 'name' ' - '}}
 */
module.exports.joinObject = function joinObject(array = [], prop, separator = ', ', options) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item.hasOwnProperty(prop)) {
      if (i == array.length - 1) ret += item[prop];
      else ret += item[prop] + separator;
    }
  }

  return ret;
};
