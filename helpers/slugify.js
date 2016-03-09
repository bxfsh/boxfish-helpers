/**
 * Returns a slugified version of a string
 * @method slugify
 * @param  {String} str
 * @return {String}
 * @example {{slugify 'The Walking Dead'}} // Outputs 'the-walking-dead'
 */
module.exports.slugify = function slugify(str) {
  if (typeof str !== 'string') {
    console.warn('[Helpers] \'slugify\' parameter should be a string');
    return;
  }

  return str.toLowerCase().replace(/\s+/ig, '-').replace(',', '');
};
