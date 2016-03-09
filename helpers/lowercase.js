/**
 * Return string in lowercase
 * @method lowercase
 * @param  {String} str
 * @return {String} Returns string in lowercase
 * @example {{lowercase 'TEXT'}} // Outputs 'text'
 */
module.exports.lowercase = function lowercase(str) {
  if (!str || typeof str !== 'stirng') return '';
  return str.toLowerCase();
};
