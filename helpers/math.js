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
