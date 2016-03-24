/**
 * Rounds a number up
 * @method ceil
 * @param  {Number} num
 * @return {Number} Returns rounded up number
 * @example {{ceil 5.2}} // Outputs 6
 */
module.exports.ceil = function ceil(num) {
  if (!num) return;
  if (isNaN(num)) {
    console.warn('[Helpers] Ceil - `num` parameter must be a number');
  } else {
    return Math.ceil(num);
  }
};
