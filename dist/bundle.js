(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
exports.dateHasPast = dateHasPast;
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
exports.today = today;
exports.truncate = truncate;
exports.uppercase = uppercase;
/**
 * Returns all of the items in the collection after the specified count.
 * @usage {{after array count}}
 *
 * @param  {Array}  array - Collection
 * @param  {Number} count - Number of items to exclude
 * @return {Array} Array excluding the number of items specified
 */
function after() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(count);
}

function and(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

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
 * Returns all of the items in the collection before the specified
 * count.
 * @usage {{before array count}}
 *
 * @param  {Array}  array
 * @param  {Integer} count
 * @return {[type]}
 */
function before() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(0, -count);
}

/**
 * Capitalize a string
 * @param  {[String]} string
 * @return {[String]} Returns the capitalized string
 */
function capitalize() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  string = string.toLowerCase();

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return match.toUpperCase();
  });
}

/**
 * Returns an array list separated by commas (',')
 * @usage {{commaSeparate array}}
 * @alias {{join array}}
 *
 * @param  {String} string
 * @return {String} Returns the formatted string
 */
function commaSeparate() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return array.join(', ');
};

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

function dateHasPast(date, options) {

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

function defaultValue(val, defaultVal) {
  return val ? val : defaultVal;
}

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

function eq() {}

function exists(val, options) {
  if (typeof val !== 'undefined') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

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
 * @usage {{formatDate date 'MM Do, YYYY'}}
 *
 * @param  {String} date
 * @param  {String} format (optional)
 * @return {String} Returns the formatted date
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
 *
 * NOTE: This helper requires triple brackets {{{formatTweet tweet}}}
 *
 * @param  {String} tweet
 * @return {String} Returns the formatted tweet
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
 *
 * NOTE: This helper requires triple brackets {{{formatTwitterSearch tweet}}}
 *
 * @method formatTwitterSearch
 * @param  {String} tweet
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

function fromNow(date) {
  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'fromNow\' helper');
    return;
  }

  date = date || new Date();

  return moment(date).fromNow();
}

function gt(a, b, options) {
  if (a > b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

function gte(a, b, options) {
  if (a >= b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

function gtlt(a, b, options) {
  if (a > b || a < b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}

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

function or(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns a pluralized version of a string
 * @param  {Array} array
 * @param  {String} string (expects singular version of the string, e.g 'keyword')
 * @return {String} Returns the number o
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

function round(val) {
  return Math.round(val);
}

function slugify(str) {
  if (typeof str !== 'string') {
    console.warn('[Helpers] \'slugify\' parameter should be a string');
    return;
  }

  return str.toLowerCase().replace(/\s+/ig, '-').replace(',', '');
}

function stringify() {
  var json = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return JSON.stringify(json);
};

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

function today() {
  var format = arguments.length <= 0 || arguments[0] === undefined ? 'lll' : arguments[0];

  return moment().format(format);
}

function truncate() {
  var val = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var wordwise = arguments[1];
  var max = arguments[2];
  var tail = arguments.length <= 3 || arguments[3] === undefined ? ' ...' : arguments[3];


  max = parseInt(max, 10);
  if (!max) return val;
  if (val.length <= max) return val;

  val = val.substr(0, max);
  if (wordwise) {
    var lastspace = val.lastIndexOf(' ');
    if (lastspace != -1) {
      val = val.substr(0, lastspace);
    }
  }

  return val + tail;
}

function uppercase(str) {
  if (typeof str === 'string') {
    console.warn('[Helper] Uppercase helper parameter should be a string');
    return str.toUpperCase();
  }
}
},{}]},{},[1])