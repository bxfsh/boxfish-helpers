/**
 * Determines if a date is in the past
 * @method dateHasPassed
 * @param  {Date} date
 * @param  {Object} options
 * @return {Boolean} Returns boolean result
 * @example {{#dateHasPassed date}}
 *   // Do Something
 * {{/dateHasPassed}}
 */
export function dateHasPassed(date, options) {

  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for \'dateHasPassed\' helper');
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
