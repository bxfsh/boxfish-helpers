/**
 * Format a date string with moment
 * @usage {{formatDate date 'MM Do, YYYY'}}
 *
 * @param  {String} date
 * @param  {String} format (optional)
 * @return {String} Returns the formatted date
 */
export function formatDate(date, format) {

  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'formateDate\' helper');
    return;
  }

  const defaultFormat = 'MMM Do, hh:mm a';

  if (!date) date = new Date();
  format = format || defaultFormat;

  date = new Date(date);

  return moment(date).format(format);
}
