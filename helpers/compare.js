/**
 * Compare two values
 * @usage {{#compare 1 '>' 2 }} returns false
 * @usage {{^compare 2 '===' 1 }} returns true
 *
 * @param  {Number} left
 * @param  {String} operator
 * @param  {Number} right
 * @return {Boolean}
 */
export function compare(left, operator = '===', right, options) {
  if (arguments.length < 3) {
    throw new Error('Mustache Helper "compare" needs 2 parameters');
  }

  if (options === undefined) {
    options = right;
    right = operator;
    operator = '===';
  }

  var operators = {
    '==':     function (l, r) {return l == r; },

    '===':    function (l, r) {return l === r; },

    '!=':     function (l, r) {return l != r; },

    '!==':    function (l, r) {return l !== r; },

    '<':      function (l, r) {return l < r; },

    '>':      function (l, r) {return l > r; },

    '<=':     function (l, r) {return l <= r; },

    '>=':     function (l, r) {return l >= r; },

    typeof: function (l, r) {return typeof l == r; },
  };

  if (!operators[operator]) {
    throw new Error('Mustache Helper "compare" doesn\'t know the operator ' + operator);
  }

  var result = operators[operator](left, right);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
