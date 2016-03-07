/**
 * Returns a pluralized version of a string
 * @method pluralize
 * @param  {Array} array
 * @param  {String} string (expects singular version)
 * @return {String} Returns pluralized word
 * @example {{pluralize 5 'post'}} // Outputs '5 posts'
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
