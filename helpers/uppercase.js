/**
 * Returns string in uppercase
 * @method uppercase
 * @param  {String} str
 * @return {String} Returns uppercase string
 * @example {{uppercase 'boxfish'}} // Outputs 'BOXFISH'
 */
module.exports.uppercase = function uppercase(str) {
  if (typeof str === 'string') {
    return str.toUpperCase();
  } else {
    console.warn('[Helper] Uppercase helper parameter should be a string');
  }
};
