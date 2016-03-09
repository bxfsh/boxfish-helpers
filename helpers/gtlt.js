/**
 * Greater than or less than operator
 * @method gtlt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
module.exports.gtlt = function gtlt(a, b, options) {
  if (a > b || a < b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

};
