/**
 * Determines if a date is in the past
 * @method dateHasPast
 * @param  {Date} date
 * @param  {Object} options
 * @return {Boolean} Returns boolean result
 * @example {{#dateHasPast date}}
 *   // Do Something
 * {{/dateHasPast}}
 */
export function dateHasPast(date, options) {

  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for \'dateHasPast\' helper');
    return;
  }

  var today = new Date().toISOString();
  var date = moment(date).toISOString();

  if (today > date) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
