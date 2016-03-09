/**
 * Returns an array of items with specified property
 * @method eachProperty
 * @param  {Object} context
 * @param  {Object} options
 */
module.exports.eachProperty = function eachProperty(context, options) {
  var content = (function () {
      var results = [];
      for (var key in context) {
        var value = context[key];
        results.push(options.fn({
          key: key,
          value: value,
        }));
      }

      return results;
    })();

  return content.join('');

};
