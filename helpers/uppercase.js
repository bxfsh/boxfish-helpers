/**
 * Returns string in uppercase
 * @method uppercase
 * @param  {String} str
 * @return {String} Returns uppercase string
 * @example {{uppercase 'boxfish'}} // Outputs 'BOXFISH'
 */
export function uppercase(str) {
  if (typeof str === 'string') {
    console.warn('[Helper] Uppercase helper parameter should be a string');
    return str.toUpperCase();
  }
}
