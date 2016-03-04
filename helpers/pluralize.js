/**
 * Returns a pluralized version of a string
 * @param  {Array} array
 * @param  {String} string (expects singular version of the string, e.g 'keyword')
 * @return {String} Returns the number o
 */
export function pluralize(array, string) {
  var length = 1;

  try {
    if (Array.isArray(array)) {
      length = array.length;
    } else {
      length = parseInt(array);
    }

    if (length === 1) return length + ' ' + string;
    else return length + ' ' + string + 's';

  } catch (err) {
    console.warn(err);
  }
}
