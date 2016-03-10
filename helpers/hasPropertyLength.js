/**
 * Determines if there are any items in an array with a specific property
 * @method hasPropertyLength
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @param  {Object} options
 * @return {Boolean}
 * @example {{#hasPropertyLength movies 'genre' 'horror'}}
 *   // Do Something
 * {{/hasPropertyLength}}
 */
module.exports.hasPropertyLength = function hasPropertyLength(array, prop, val, options) {
  var count = 0;

  if (!array.length) {
    return options.inverse(this);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      count++;
    }
  }

  if (count > 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
