/**
 * Greater than or equal to operator
 * @method gte
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
module.exports.gte = function gte(a, b, options) {
  if (a >= b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
