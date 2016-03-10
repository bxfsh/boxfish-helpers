/**
 * Math helper
 * @method math
 * @param  {Number} a - left hand argument
 * @param  {String} operator
 * @param  {Number} b - right hand argument
 * @return {Number} returns calculated number
 * @example {{math 5 '-' 4}} // Output: 1
 */
module.exports.math = function math(a, operator, b) {
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    console.warn('Math helper \'a\' and \'b\' parameters MUST be integers.', a, b);
    return;
  }

  switch (operator) {
    case '/':
      return a / b;
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return;
  }
};
