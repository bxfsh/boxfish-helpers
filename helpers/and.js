/**
 * And operator helper
 * @method and
 * @param  {String} a
 * @param  {String} b
 * @param  {Object} options
 * @return {Boolean} Returns boolean value
 *
 * @example {{#and isAdmin isLoggedIn}}
 *   // Do Something
 * {{/and}}
 */
export function and(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
