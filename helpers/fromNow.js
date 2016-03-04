export function fromNow(date) {
  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'fromNow\' helper');
    return;
  }

  date = date || new Date();

  return moment(date).fromNow();
}
