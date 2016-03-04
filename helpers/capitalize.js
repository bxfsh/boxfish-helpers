/**
 * Capitalize a string
 * @param  {[String]} string
 * @return {[String]} Returns the capitalized string
 */
export function capitalize(string = '') {
  string = string.toLowerCase();

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return match.toUpperCase();
  });
}
