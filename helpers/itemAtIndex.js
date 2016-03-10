/**
 * Returns an array item at a specified index
 * @method itemAtIndex
 * @param  {Array} array
 * @param  {Number} index
 * @return {Object|String|Number} Returns array item
 * {{itemAtIndex posts 5}} // Get 'post' at index 5
 */
module.exports.itemAtIndex = function itemAtIndex(array = [], index = 0) {
  return array[index];
};
