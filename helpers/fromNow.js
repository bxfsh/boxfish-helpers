/**
 * Returns the time difference between now and a specified date
 * @method fromNow
 * @param  {Date} date
 * @return {Date} Returns time difference
 * @example {{fromNow date}}
 */
module.exports.fromNow = function fromNow(date) {
  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'fromNow\' helper');
    return;
  }

  date = date || new Date();

  return moment(date).fromNow();
};
