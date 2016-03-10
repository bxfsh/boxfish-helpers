!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.BoxfishHelpers=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// Expose BoxfishHelpers as global object
module.exports = _dereq_('./helpers.js');

},{"./helpers.js":2}],2:[function(_dereq_,module,exports){
'use strict';

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
module.exports.after = function after() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(count);
};

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
module.exports.and = function and(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

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
module.exports.arrayContains = function arrayContains() {
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
module.exports.before = function before() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(0, count);
};

/**
 * Capitalize a string
 * @method capitalize
 * @param  {String} string
 * @return {String} Returns the capitalized string
 * @example {{capitalize firstName}}
 */
module.exports.capitalize = function capitalize() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  string = string.toLowerCase();

  return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    return match.toUpperCase();
  });
};

/**
 * Returns an array list separated by commas
 * @method commaSeparate
 * @param  {Array} array
 * @param  {String} separator - default: ', '
 * @return {String} Returns the formatted string
 * @example {{commaSeparate genres}}
 */
module.exports.commaSeparate = function commaSeparate() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var separator = arguments[1];
  var options = arguments[2];


  if (arguments.length > 2) {
    return array.join(separator);
  } else {
    var separator = ', ';
    return array.join(separator);
  }
};

module.exports.join = module.exports.commaSeparate;

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
module.exports.compare = function compare(left) {
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
};

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
module.exports.dateHasPassed = function dateHasPassed(date, options) {

  var today = new Date().toISOString();
  var date = new Date(date).toISOString();

  if (today > date) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

// Alias 'dateHasPast'
module.exports.dateHasPast = module.exports.dateHasPassed;

/**
 * Returns default value if value is missing
 * @method defaultValue
 * @param  {String} val
 * @param  {String} defaultVal
 * @return {String} Returns string
 * @example {{defaultValue name 'unknown'}}
 * @alias default
 */
module.exports.defaultValue = function defaultValue(val, defaultVal) {
  return val ? val : defaultVal;
};

module.exports.default = module.exports.defaultValue;

/**
 * Returns an array of items with specified property
 * @method eachProperty
 * @param  {Object} context
 * @param  {Object} options
 */
module.exports.eachProperty = function eachProperty(context, options) {
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
};

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
module.exports.eq = function eq() {
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
};

/**
 * Returns a sliced array from 0 to a specified position
 * @method first
 * @param  {Array} array
 * @param  {Number} count
 * @return {Array} Returns sliced array
 * @example {{first posts 10}}
 */
module.exports.first = function first() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var count = arguments[1];

  return array.slice(0, count);
};

/**
 * Format a date string with moment.js
 * @method formatDate
 *
 * @param  {String} date
 * @param  {String} format (optional)
 * @return {String} Returns the formatted date
 *
 * @example {{formatDate date 'hh:mm'}}
 * @alias moment
 */

module.exports.formatDate = function formatDate(date, format, options) {

  if (arguments.length === 2) {
    // format argument missing
    var format = 'MMM Do, hh:mm a';
  }

  if (!date) date = new Date();

  date = new Date(date);

  return moment(date).format(format);
};

module.exports.moment = module.exports.formatDate;

/**
 * Format a tweet to include links for urls, hashtags and users
 * @method formatTweet
 * @param  {String} tweet
 * @return {String} Returns the formatted tweet
 * @example {{{formatTweet tweetText}}} // Note: triple braces
 */
module.exports.formatTweet = function formatTweet(tweet) {
  try {
    tweet = tweet.replace(/([http|https]+\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}\S*)/ig, "<a href='$1'>$1</a>");
    tweet = tweet.replace(/@(\w{1,15})\b/ig, "<a href='https://twitter.com/$1'>@$1</a>");
    tweet = tweet.replace(/#(\w*)\b/ig, "<a href='https://twitter.com/hashtag/$1'>#$1</a>");
    return tweet;
  } catch (err) {
    console.warn(err);
  }
};

/**
 * Finds hashtags and handles in a string and adds triggers for twitter search
 * @method formatTwitterSearch
 * @param  {String} tweet
 * @return {String} Returns formatted tweet
 * @example {{{formatTwitterSearch tweet}}} // Note the triple braces
 */
module.exports.formatTwitterSearch = function formatTwitterSearch(tweet) {
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
};

/**
 * Returns the time difference between now and a specified date
 * @method fromNow
 * @param  {Date} date
 * @return {Date} Returns time difference
 * @example {{fromNow date}}
 */
module.exports.fromNow = function fromNow(date) {
  if (typeof moment === 'undefined') {
    console.warn('Moment.js is required for the \'fromNow\' helper');
    return;
  }

  date = date || new Date();

  return moment(date).fromNow();
};

/**
 * Greater than operator
 * @method gt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
module.exports.gt = function gt(a, b, options) {
  if (a > b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Greater than or equal to operator
 * @method gte
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
module.exports.gte = function gte(a, b, options) {
  if (a >= b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Greater than or less than operator
 * @method gtlt
 * @param  {String|Number} a
 * @param  {String|Number} b
 * @param  {Object} options
 * @return {[type]}
 * @example {{gt 4 5}}
 */
module.exports.gtlt = function gtlt(a, b, options) {
  if (a > b || a < b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

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
module.exports.hasProperty = function hasProperty(array, prop, val) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty(prop) && array[i][prop] === val) {
      ret += options.fn(array[i]);
    }
  }

  return ret;
};

/**
 * Determines if there are any items in an array with a specific property
 * @method hasPropertyLength
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @param  {Object} options
 * @return {Boolean}
 * @example {{#hasPropertyLength movies 'genre' 'horror'}}
 *   // Do Something
 * {{/hasPropertyLength}}
 */
module.exports.hasPropertyLength = function hasPropertyLength(array, prop, val, options) {
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
};

/**
 * Returns an array item at a specified index
 * @method itemAtIndex
 * @param  {Array} array
 * @param  {Number} index
 * @return {Object|String|Number} Returns array item
 * {{itemAtIndex posts 5}} // Get 'post' at index 5
 */
module.exports.itemAtIndex = function itemAtIndex() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  return array[index];
};

/**
 * Join each array item property
 * @method joinObject
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} separator - the string separator
 * @param  {Object} options
 * @return {String} returns a string
 *
 * @example {{joinObject posts 'name' ' - '}}
 */
module.exports.joinObject = function joinObject() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var prop = arguments[1];
  var separator = arguments.length <= 2 || arguments[2] === undefined ? ', ' : arguments[2];
  var options = arguments[3];

  var ret = '';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item.hasOwnProperty(prop)) {
      if (i == array.length - 1) ret += item[prop];else ret += item[prop] + separator;
    }
  }

  return ret;
};

/**
 * Return string in lowercase
 * @method lowercase
 * @param  {String} str
 * @return {String} Returns string in lowercase
 * @alias toLowerCase
 * @example {{lowercase 'TEXT'}} // Outputs 'text'
 */
module.exports.lowercase = function lowercase(str) {
  if (!str || typeof str !== 'stirng') return '';
  return str.toLowerCase();
};

module.exports.toLowerCase = module.exports.lowercase;

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

/**
 * Returns the number of items in an array with a specific property
 * @method numberItemsWithProperty
 * @param  {Array} array
 * @param  {String} prop
 * @param  {String} val
 * @return {Number} Returns number
 * @example {{numberItemsWithProperty posts 'name' 'one'}}
 */
module.exports.numberItemsWithProperty = function numberItemsWithProperty() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var prop = arguments[1];
  var val = arguments[2];

  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  array = array.filter(function (item) {
    return item.hasOwnProperty(prop) && item[prop] === val ? item : null;
  });

  return array.length > 0 ? array.length : '0';
};

/**
 * Returns the number of objects with { deleted: false }
 * @method numberNotDeleted
 * @param  {Array} array
 * @return {Number}
 * @example {{numberNotDeleted keywords}} // Returns number of keywords with {deleted: false}
 */
module.exports.numberNotDeleted = function numberNotDeleted() {
  var array = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return _.filter(array, {
    deleted: false
  }).length;
};

/**
 * Numeral.js helper
 * @method numeral
 * @param  {Number} num
 * @param  {String} format - Numeral format (default = '0,0.00')
 * @return {String} Returns number is specified format
 * @example {{numeral 165000 '0a'}} // Output: 165k
 */
module.exports.numeral = function () {
  var num = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var format = arguments.length <= 1 || arguments[1] === undefined ? '0,0.00' : arguments[1];


  if (num > 10000) {
    format = '0.0a';
  }

  return numeral(num).format(format);
};

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
module.exports.or = function or(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns a pluralized version of a string
 * @method pluralize
 * @param  {Array} array
 * @param  {String} string (expects singular version)
 * @return {String} Returns pluralized word
 * @example {{pluralize 5 'post'}} // Outputs '5 posts'
 */
module.exports.pluralize = function pluralize(array, string) {
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
};

/**
 * Remove underscores from a string
 * @method removeUnderscores
 * @param  {String} string
 * @return {string} returns the string without underscores
 * @example {{removeUnderscores 'first_name'}} // Output: 'first name'
 */
module.exports.removeUnderscores = function removeUnderscores() {
  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return string.replace(/\_/ig, ' ');
};

/**
 * Math Round helper
 * @method round
 * @param  {Number} val
 * @return {Number} Returns rounded value
 * @example {{round 1.3}} // Outputs 1
 */
module.exports.round = function round(val) {
  return Math.round(val);
};

/**
 * Returns a slugified version of a string
 * @method slugify
 * @param  {String} str
 * @return {String}
 * @example {{slugify 'The Walking Dead'}} // Outputs 'the-walking-dead'
 */
module.exports.slugify = function slugify(str) {
  if (typeof str !== 'string') {
    console.warn('[Helpers] \'slugify\' parameter should be a string');
    return;
  }

  return str.toLowerCase().replace(/\s+/ig, '-').replace(',', '');
};

/**
 * Stringify JSON
 * @method stringify
 * @param  {Object} json
 * @return {String} returns stringified JSON
 * @example {{{stringify json}}} // Note the triple braces
 */
module.exports.stringify = function stringify() {
  var json = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return JSON.stringify(json, null, 2);
};

module.exports.tmdb = function tmdb(url, size, options) {
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
};

/**
 * Returns todays date
 * @method today
 * @param  {String} format
 * @return {Date} Returns todays date
 * @example {{today 'Do MMM, YYYY'}}
 */
module.exports.today = function today() {
  var format = arguments.length <= 0 || arguments[0] === undefined ? 'lll' : arguments[0];

  return moment().format(format);
};

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
module.exports.truncate = function truncate() {
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
};

/**
 * Returns string in uppercase
 * @method uppercase
 * @param  {String} str
 * @return {String} Returns uppercase string
 * @example {{uppercase 'boxfish'}} // Outputs 'BOXFISH'
 */
module.exports.uppercase = function uppercase(str) {
  if (typeof str === 'string') {
    console.warn('[Helper] Uppercase helper parameter should be a string');
    return str.toUpperCase();
  }
};
},{}]},{},[1])
(1)
});