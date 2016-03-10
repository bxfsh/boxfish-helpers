/**
 * Returns all of the items in the collection before the specified count.
 * @method before
 * @param  {Array}  array
 * @param  {Number} count
 * @return {Array} Returns sliced array
 *
 * @example {{before posts 10}}
 */
module.exports.before = function before(array = [], count) {
  return array.slice(0, count);
};
