!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.BoxfishHelpers=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// Expose BoxfishHelpers as global object
module.exports = _dereq_('./helpers.js');

},{"./helpers.js":2}],2:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.after = after;
exports.and = and;
exports.arrayContains = arrayContains;
exports.before = before;
exports.capitalize = capitalize;
exports.commaSeparate = commaSeparate;
exports.compare = compare;
exports.dateHasPassed = dateHasPassed;
exports.defaultValue = defaultValue;
exports.eachProperty = eachProperty;
exports.eq = eq;
exports.exists = exists;
exports.first = first;
exports.foreach = foreach;
exports.formatDate = formatDate;
exports.formatTweet = formatTweet;
exports.formatTwitterSearch = formatTwitterSearch;
exports.fromNow = fromNow;
exports.gt = gt;
exports.gte = gte;
exports.gtlt = gtlt;
exports.hasProperty = hasProperty;
exports.hasPropertyLength = hasPropertyLength;
exports.itemAtIndex = itemAtIndex;
exports.joinObject = joinObject;
exports.lowercase = lowercase;
exports.math = math;
exports.numberItemsWithProperty = numberItemsWithProperty;
exports.numberNotDeleted = numberNotDeleted;
exports.numeral = numeral;
exports.or = or;
exports.pluralize = pluralize;
exports.removeUnderscores = removeUnderscores;
exports.round = round;
exports.slugify = slugify;
exports.stringify = stringify;
exports.tmdb = tmdb;
exports.toLowerCase = toLowerCase;
exports.today = today;
exports.truncate = truncate;
exports.uppercase = uppercase;
/**
 * Returns all of the items in the collection after the specified count.
 *
 * @method after
 * @param  {Array} array - Collection
 * @param  {Number} count - Number of items to exclude
 * @return {Array} Array excluding the number of items specified
 *
 * @example {{after posts 5}}
 */
function after() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(count);
}

/**
 * And operator helper
 * @method and
 * @param  {String} a
 * @param  {String} b
 * @param  {Object} options
 * @return {Boolean} Returns boolean value
 *
 * @example {{#and isAdmin isLoggedIn}}
 *   // Do Something
 * {{/and}}
 */
function and(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

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
function arrayContains() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var value = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var options = arguments[2];

  if (!array.length || !value) return;

  if (array.indexOf(value) > -1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns all of the items in the collection before the specified count.
 * @method before
 * @param  {Array}  array
 * @param  {Number} count
 * @return {Array} Returns sliced array
 *
 * @example {{before posts 10}}
 */
function before() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(0, -count);
}

/**
 * Capitalize a string
 * @method capitalize
 * @param  {String} string
 * @return {String} Returns the capitalized string
 * @example {{capitalize firstName}}
 */
function capitalize() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  string = string.toLowerCase();

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return match.toUpperCase();
  });
}

/**
 * Returns an array list separated by commas
 * @method commaSeparate
 * @param  {Array} array
 * @return {String} Returns the formatted string
 * @example {{commaSeparate genres}}
 */
function commaSeparate() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return array.join(', ');
};

/**
 * Compare two values
 * @method compare
 * @param  {Number} left
 * @param  {String} operator
 * @param  {Number} right
 * @return {Boolean} Returns boolean result
 * @example {{#compare 1 '>=' 5}}
 *   // Do Something
 * {{/compare}}
 */
function compare(left) {
  var operator = arguments.length <= 1 || arguments[1] === undefined ? '===' : arguments[1];
  var right = arguments[2];
  var options = arguments[3];

  if (arguments.length < 3) {
    throw new Error('Mustache Helper "compare" needs 2 parameters');
  }

  if (options === undefined) {
    options = right;
    right = operator;
    operator = '===';
  }

  var operators = {
    '==': function _(l, r) {
      return l == r;
    },

    '===': function _(l, r) {
      return l === r;
    },

    '!=': function _(l, r) {
      return l != r;
    },

    '!==': function _(l, r) {
      return l !== r;
    },

    '<': function _(l, r) {
      return l < r;
    },

    '>': function _(l, r) {
      return l > r;
    },

    '<=': function _(l, r) {
      return l <= r;
    },

    '>=': function _(l, r) {
      return l >= r;
    },

    typeof: function _typeof(l, r) {
      return (typeof l === 'undefined' ? 'undefined' : _typeof2(l)) == r;
    }
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
function dateHasPassed(date, options) {

  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for \'dateHasPassed\' helper');
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

/**
 * Returns default value if value is missing
 * @method defaultValue
 * @param  {String} val
 * @param  {String} defaultVal
 * @return {String} Returns string
 * @example {{defaultValue name 'unknown'}}
 */
function defaultValue(val, defaultVal) {
  return val ? val : defaultVal;
}

/**
 * Returns an array of items with specified property
 * @method eachProperty
 * @param  {Object} context
 * @param  {Object} options
 */
function eachProperty(context, options) {
  var content = function () {
    var results = [];
    for (var key in context) {
      var value = context[key];
      results.push(options.fn({
        key: key,
        value: value
      }));
    }

    return results;
  }();

  return content.join('');
}

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
function eq() {
  var val = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var match = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var options = arguments[2];


  if (typeof val === 'string') val = val.toLowerCase();
  if (typeof match === 'string') match = match.toLowerCase();

  if (val === match) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Determine if value exists
 * @method exists
 * @param  {String} val
 * @param  {Object} options
 * @return {Boolean} Returns boolean value
 * @example {{#exists someValue}}
 *   // Do Something
 * {{/exists}}
 */
function exists(val, options) {
  if (typeof val !== 'undefined') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Returns a sliced array from 0 to a specified position
 * @method first
 * @param  {Array} array
 * @param  {Number} count
 * @return {Array} Returns sliced array
 * @example {{first posts 10}}
 */
function first() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(0, count);
};

function foreach(array, options) {

  if (!array.length) {
    return options.inverse(this);
  }

  return array.map(function (item, index) {
    return options.fn(item);
  }).join('');
}

/**
 * Format a date string with moment
 * @method formatDate
 *
 * @param  {String} date
 * @param  {String} format (optional)
 * @return {String} Returns the formatted date
 *
 * @example {{formatDate date 'hh:mm'}}
 */
function formatDate(date, format) {

  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'formateDate\' helper');
    return;
  }

  var defaultFormat = 'MMM Do, hh:mm a';

  if (!date) date = new Date();
  format = format || defaultFormat;

  date = new Date(date);

  return moment(date).format(format);
}

/**
 * Format a tweet to include links for urls, hashtags and users
 * @method formatTweet
 * @param  {String} tweet
 * @return {String} Returns the formatted tweet
 * @example {{{formatTweet tweetText}}} // Note: triple braces
 */
function formatTweet(tweet) {
  try {
    tweet = tweet.replace(/([http|https]+\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\S*)/ig, "<a href='$1'>$1</a>");
    tweet = tweet.replace(/@(\w{1,15})\b/ig, "<a href='https://twitter.com/$1'>@$1</a>");
    tweet = tweet.replace(/#(\w*)\b/ig, "<a href='https://twitter.com/hashtag/$1'>#$1</a>");
    return tweet;
  } catch (err) {
    console.warn(err);
  }
}

/**
 * Finds hashtags and handles in a string and adds triggers for twitter search
 * @method formatTwitterSearch
 * @param  {String} tweet
 * @return {String} Returns formatted tweet
 * @example {{{formatTwitterSearch tweet}}} // Note the triple braces
 */
function formatTwitterSearch(tweet) {
  try {

    // Find URLs and return as usual
    tweet = tweet.replace(/([http|https]+\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\S*)/ig, "<a href='$1'>$1</a>");

    // Format hashtags and handles for twitter search
    tweet = tweet.replace(/@(\w{1,15})\b/ig, "<a type='button' data-keyword='@$1' data-trigger='twitter-search'>@$1</a>");
    tweet = tweet.replace(/#(\w*)\b/ig, "<a type='button' data-keyword='#$1' data-trigger='twitter-search'>#$1</a>");

    return tweet;
  } catch (err) {
    console.warn(err);
  }
}

/**
 * Returns the time difference between now and a specified date
 * @method fromNow
 * @param  {Date} date
 * @return {Date} Returns time difference
 * @example {{fromNow date}}
 */
function fromNow(date) {
  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'fromNow\' helper');
    return;
  }

  date = date || new Date();

  return moment(date).fromNow();
}

/**
 * Greater than operator
 * @method gt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
function gt(a, b, options) {
  if (a > b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Greater than or equal to operator
 * @method gte
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
function gte(a, b, options) {
  if (a >= b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Greater than or less than operator
 * @method gtlt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
function gtlt(a, b, options) {
  if (a > b || a < b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Returns array of items with specific property
 * @method hasProperty
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @return {Array}
 * @example {{#hasProperty movies 'genre' 'horror'}}
 *   // Horror Movies
 * {{/hasProperty}}
 */
function hasProperty(array, prop, val) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      ret += options.fn(array[i]);
    }
  }

  return ret;
}

function hasPropertyLength(array, prop, val, options) {
  var count = 0;

  if (!array.length) {
    return options.inverse(this);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      count++;
    }
  }

  if (count > 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

function itemAtIndex(array, index, format) {
  if (!array) return '';
  return array[index];
}

/**
 * [joinObject description]
 * @method joinObject
 * @param  {[type]}   array     =             [] [description]
 * @param  {[type]}   prop      [description]
 * @param  {[type]}   separator [description]
 * @param  {[type]}   options   [description]
 * @return {[type]}             [description]
 */
function joinObject() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var prop = arguments[1];
  var separator = arguments[2];
  var options = arguments[3];

  var ret = '';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item.hasOwnProperty(prop)) {
      if (i == array.length - 1) ret += item[prop];else ret += item[prop] + separator;
    }
  }

  return ret;
}

/**
 * Return string in lowercase
 * @method lowercase
 * @param  {String} str
 * @return {String} Returns string in lowercase
 * @example {{lowercase 'TEXT'}} // Outputs 'text'
 */
function lowercase(str) {
  if (!str || typeof str !== 'stirng') return '';
  return str.toLowerCase();
}

function math(a, operator, b) {
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
}

function numberItemsWithProperty(array, prop, val) {
  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  array = array.filter(function (item) {
    return item.hasOwnProperty(prop) && item[prop] === val ? item : null;
  });

  return array.length > 0 ? array.length : '0';
}

function numberNotDeleted(array) {
  return _.filter(array, { deleted: false }).length;
};

function numeral(number, format) {
  if (typeof format !== 'string') {
    format = '0,0.00';

    if (number > 10000) {
      format = '0.0a';
    }
  }

  return numeral(number).format(format);
}

/**
 * OR operator
 * @method or
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options [description]
 * @return {Boolean}
 * @example {{#or true false}}
 *   // Do Something
 * {{/or}}
 */
function or(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

/**
 * Returns a pluralized version of a string
 * @method pluralize
 * @param  {Array} array
 * @param  {String} string (expects singular version)
 * @return {String} Returns pluralized word
 * @example {{pluralize 5 'post'}} // Outputs '5 posts'
 */
function pluralize(array, string) {
  var length = 1;

  try {
    if (Array.isArray(array)) {
      length = array.length;
    } else {
      length = parseInt(array);
    }

    if (length === 1) return length + ' ' + string;else return length + ' ' + string + 's';
  } catch (err) {
    console.warn(err);
  }
}

function removeUnderscores() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return string.replace(/\_/ig, ' ');
}

/**
 * Math Round helper
 * @method round
 * @param  {Number} val
 * @return {Number} Returns rounded value
 * @example {{round 1.3}} // Outputs 1
 */
function round(val) {
  return Math.round(val);
}

/**
 * Returns a slugified version of a string
 * @method slugify
 * @param  {String} str
 * @return {String}
 * @example {{slugify 'The Walking Dead'}} // Outputs 'the-walking-dead'
 */
function slugify(str) {
  if (typeof str !== 'string') {
    console.warn('[Helpers] \'slugify\' parameter should be a string');
    return;
  }

  return str.toLowerCase().replace(/\s+/ig, '-').replace(',', '');
}

/**
 * Stringify JSON
 * @method stringify
 * @param  {Object} json
 * @return {String} returns stringified JSON
 * @example {{{stringify json}}} // Note the triple braces
 */
function stringify() {
  var json = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return JSON.stringify(json, null, 2);
}

function tmdb(url, size, options) {
  if (arguments.length <= 2) size = null;

  if (!url) return '/images/missing.png';

  if (size && typeof size !== 'string') {
    console.warn('Size parameter should be a string (e.g \'w300\', \'original\' etc)');
    return;
  }

  if (/(https|http)\:\/\/image\.tmdb\.org\/t\/p\/w300(null)*$/ig.test(url)) {
    return '/images/missing.png';
  } else {

    if (size && url) {

      url = url.split('/');
      url[url.indexOf('p') + 1] = size;
      url = url.join('/');
      return url;
    } else return url;
  }
}

/**
 * Returns a string in lower case
 *
 * @method toLowerCase
 * @param  {string} str - string to lower cas
 * @return {string} string lower case string
 *
 * @example {{toLowerCase 'Some String'}}
 */
function toLowerCase() {
  var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return str.toLowerCase();
}

/**
 * Returns todays date
 * @method today
 * @param  {String} format
 * @return {Date} Returns todays date
 * @example {{today 'Do MMM, YYYY'}}
 */
function today() {
  var format = arguments.length <= 0 || arguments[0] === undefined ? 'lll' : arguments[0];

  return moment().format(format);
}

/**
 * Truncate a string to specific length
 * @method truncate
 * @param  {String} paragraph
 * @param  {Boolean} wordwise
 * @param  {Number} max
 * @param  {String} tail
 * @return {String} Returns the truncated string
 * @example {{truncate paragraph true 100 '...'}}
 */
function truncate() {
  var paragraph = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var wordwise = arguments[1];
  var max = arguments[2];
  var tail = arguments.length <= 3 || arguments[3] === undefined ? ' ...' : arguments[3];


  max = parseInt(max, 10);
  if (!max) return paragraph;
  if (paragraph.length <= max) return paragraph;

  paragraph = paragraph.substr(0, max);
  if (wordwise) {
    var lastspace = paragraph.lastIndexOf(' ');
    if (lastspace != -1) {
      paragraph = paragraph.substr(0, lastspace);
    }
  }

  return paragraph + tail;
}

/**
 * Returns string in uppercase
 * @method uppercase
 * @param  {String} str
 * @return {String} Returns uppercase string
 * @example {{uppercase 'boxfish'}} // Outputs 'BOXFISH'
 */
function uppercase(str) {
  if (typeof str === 'string') {
    console.warn('[Helper] Uppercase helper parameter should be a string');
    return str.toUpperCase();
  }
}

},{}]},{},[1])
(1)
});