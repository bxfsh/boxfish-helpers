/**
 * Truncate a string to specific length
 * @method truncate
 * @param  {String} paragraph
 * @param  {Boolean} wordwise
 * @param  {Number} max
 * @param  {String} tail
 * @return {String} Returns the truncated string
 * @example {{truncate paragraph true 100 '...'}}
 */
module.exports.truncate = function truncate(paragraph = '', wordwise, max, tail = ' ...') {

  max = parseInt(max, 10);
  if (!max) return paragraph;
  if (paragraph.length <= max) return paragraph;

  paragraph = paragraph.substr(0, max);
  if (wordwise) {
    let lastspace = paragraph.lastIndexOf(' ');
    if (lastspace != -1) {
      paragraph = paragraph.substr(0, lastspace);
    }
  }

  return paragraph + tail;
};
