/**
 * Returns the number of objects with { deleted: false }
 * @method numberNotDeleted
 * @param  {Array} array
 * @return {Number}
 * @example {{numberNotDeleted keywords}} // Returns number of keywords with {deleted: false}
 */
module.exports.numberNotDeleted = function numberNotDeleted(array = []) {
  return _.filter(array, {
      deleted: false,
    }).length;
};
