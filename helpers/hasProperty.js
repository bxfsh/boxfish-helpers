/**
 * Returns array of items with specific property
 * @method hasProperty
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @return {Array}
 * @alias withProperty
 * @deprecated (true) - use "withProperty" instead
 * @example {{#hasProperty movies 'genre' 'horror'}}
 *   // Horror Movies
 * {{/hasProperty}}
 */
module.exports.hasProperty = function hasProperty(array, prop, val, options) {
  var ret = '';

  // for each item in an array
  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      ret += options.fn(array[i]);
    }
  }

  return ret;
};

module.exports.withProperty = module.exports.hasProperty;
