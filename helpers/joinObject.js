/**
 * [joinObject description]
 * @method joinObject
 * @param  {[type]}   array     =             [] [description]
 * @param  {[type]}   prop      [description]
 * @param  {[type]}   separator [description]
 * @param  {[type]}   options   [description]
 * @return {[type]}             [description]
 */
export function joinObject(array = [], prop, separator, options) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item.hasOwnProperty(prop)) {
      if (i == array.length - 1) ret += item[prop];
      else ret += item[prop] + separator;
    }
  }

  return ret;
}
