/**
 * Determine if value exists
 * @method exists
 * @param  {String} val
 * @param  {Object} options
 * @return {Boolean} Returns boolean value
 * @example {{#exists someValue}}
 *   // Do Something
 * {{/exists}}
 */
export function exists(val, options) {
  if (typeof val !== 'undefined') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
