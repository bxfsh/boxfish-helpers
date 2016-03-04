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
