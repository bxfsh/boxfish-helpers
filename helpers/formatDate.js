/**
 * Format a date string with moment.js
 * @method formatDate
 *
 * @param  {String} date
 * @param  {String} format (optional)
 * @return {String} Returns the formatted date
 *
 * @example {{formatDate date 'hh:mm'}}
 * @alias moment
 */

module.exports.formatDate = function formatDate(date, format, options) {

  if (arguments.length === 2) {
    // format argument missing
    var format = 'MMM Do, hh:mm a';
  }

  if (!date) date = new Date();

  date = new Date(date);

  return moment(date).format(format);
};

module.exports.moment = module.exports.formatDate;
