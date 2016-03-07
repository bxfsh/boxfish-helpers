/**
 * Returns all of the items in the collection after the specified count.
 *
 * @method after
 * @param  {Array} array - Collection
 * @param  {Number} count - Number of items to exclude
 * @return {Array} Array excluding the number of items specified
 *
 * @example {{after posts 5}}
 */
export function after(array = [], count) {
  return array.slice(count);
}
