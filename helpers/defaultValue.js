/**
 * Returns default value if value is missing
 * @method defaultValue
 * @param  {String} val
 * @param  {String} defaultVal
 * @return {String} Returns string
 * @example {{defaultValue name 'unknown'}}
 */
export function defaultValue(val, defaultVal) {
  return val ? val : defaultVal;
}
