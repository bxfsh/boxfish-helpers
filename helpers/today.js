/**
 * Returns todays date
 * @method today
 * @param  {String} format
 * @return {Date} Returns todays date
 * @example {{today 'Do MMM, YYYY'}}
 */
export function today(format = 'lll') {
  return moment().format(format);
}
