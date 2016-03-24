/**
 * Rounds a number down
 * @method floor
 * @param  {Number} num
 * @return {Number} Returns rounded down number
 * @example {{floor 5.9}} // Outputs 5
 */
module.exports.floor = function floor(num) {
  if (!num) return;
  if (isNaN(num)) {
    console.warn('[Helpers] Floor - `num` parameter must be a number');
  } else {
    return Math.floor(num);
  }
};
