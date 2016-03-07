/**
 * Stringify JSON
 * @method stringify
 * @param  {Object} json
 * @return {String} returns stringified JSON
 * @example {{{stringify json}}} // Note the triple braces
 */
export function stringify(json = {}) {
  return JSON.stringify(json, null, 2);
}
