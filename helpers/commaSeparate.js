/**
 * Returns an array list separated by commas (',')
 * @usage {{commaSeparate array}}
 * @alias {{join array}}
 *
 * @param  {String} string
 * @return {String} Returns the formatted string
 */
export function commaSeparate(array = []) {
  return array.join(', ');
};
