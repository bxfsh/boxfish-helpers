/**
 * Determines if an array contains an element with specified value
 *
 * @method arrayContains
 * @param  {Array} array
 * @param  {String} value
 * @param  {Object} options
 * @return {Boolean} Returns boolean value
 *
 * @example {{#arrayContains countries 'Ireland'}}
 *   // Do Something
 * {{/arrayContains}}
 */
export function arrayContains(array = [], value = '', options) {
  if (!array.length || !value) return;

  if (array.indexOf(value) > -1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
