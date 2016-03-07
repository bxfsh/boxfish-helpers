/**
 * Greater than operator
 * @method gt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
export function gt(a, b, options) {
  if (a > b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
