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
module.exports.dateHasPassed = function dateHasPassed(date, options) {

  var today = new Date().toISOString();
  var date = new Date(date).toISOString();

  if (today > date) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

// Alias 'dateHasPast'
module.exports.dateHasPast = module.exports.dateHasPassed;
