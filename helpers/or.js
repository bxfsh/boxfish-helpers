/**
 * OR operator
 * @method or
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options [description]
 * @return {Boolean}
 * @example {{#or true false}}
 *   // Do Something
 * {{/or}}
 */
export function or(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
