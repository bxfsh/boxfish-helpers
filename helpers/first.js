/**
 * Returns a sliced array from 0 to a specified position
 * @method first
 * @param  {Array} array
 * @param  {Number} count
 * @return {Array} Returns sliced array
 * @example {{first posts 10}}
 */
module.exports.first = function first(array = [], count) {
  return array.slice(0, count);
};
