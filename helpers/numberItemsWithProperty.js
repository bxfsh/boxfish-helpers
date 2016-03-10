/**
 * Returns the number of items in an array with a specific property
 * @method numberItemsWithProperty
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @return {Number} Returns number
 * @example {{numberItemsWithProperty posts 'name' 'one'}}
 */
module.exports.numberItemsWithProperty = function numberItemsWithProperty(array = [], prop, val) {
  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  array = array.filter(function (item) {
      return item.hasOwnProperty(prop) && item[prop] === val ? item : null;
    });

  return array.length > 0 ? array.length : '0';
};
