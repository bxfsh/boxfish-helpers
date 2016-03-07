/**
 * Determines if one value equals another
 * @method eq
 * @param  {String|Number} val
 * @param  {String|Number} match
 * @param  {Object} options [description]
 * @return {Boolean}
 * @example {{#eq 'one' 'two'}}
 *    // Do Something
 * {{/eq}}
 */
export function eq(val = '', match = '', options) {

  if (typeof val === 'string') val = val.toLowerCase();
  if (typeof match === 'string') match = match.toLowerCase();

  if (val === match) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
