/**
 * Returns all of the items in the collection before the specified
 * count.
 * @usage {{before array count}}
 *
 * @param  {Array}  array
 * @param  {Integer} count
 * @return {[type]}
 */
export function before(array = [], count) {
  return array.slice(0, -count);
}
