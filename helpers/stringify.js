/**
 * Stringify JSON
 * @method stringify
 * @param  {Object} json
 * @return {String} returns stringified JSON
 * @example {{{stringify json}}} // Note the triple braces
 */
module.exports.stringify = function stringify(json = {}) {
  return JSON.stringify(json, null, 2);
};
