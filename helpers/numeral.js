/**
 * Numeral.js helper
 * @method numeral
 * @param  {Number} num
 * @param  {String} format - Numeral format (default = '0,0.00')
 * @return {String} Returns number is specified format
 * @example {{numeral 165000 '0a'}} // Output: 165k
 */
module.exports.numeral = function (num = 0, format = '0,0.00') {

  if (num > 10000) {
    format = '0.0a';
  }

  return numeral(num).format(format);
};
