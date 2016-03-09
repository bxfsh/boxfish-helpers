module.exports.foreach = function foreach(array, options) {

  if (!array.length) {
    return options.inverse(this);
  }

  return array.map(function (item, index) {
    return options.fn(item);
  }).join('');

};
