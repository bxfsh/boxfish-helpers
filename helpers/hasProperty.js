/**
 * Returns array of items with specific property
 * @method hasProperty
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @return {Array}
 * @example {{#hasProperty movies 'genre' 'horror'}}
 *   // Horror Movies
 * {{/hasProperty}}
 */
module.exports.hasProperty = function hasProperty(array, prop, val) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      ret += options.fn(array[i]);
    }
  }

  return ret;
};
