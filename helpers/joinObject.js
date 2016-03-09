/**
 * Join object
 * @method joinObject
 * @param  {[type]}   array
 * @param  {[type]}   prop
 * @param  {[type]}   separator
 * @param  {[type]}   options
 * @return {[type]}
 */
module.exports.joinObject = function joinObject(array = [], prop, separator, options) {
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
