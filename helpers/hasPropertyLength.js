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
