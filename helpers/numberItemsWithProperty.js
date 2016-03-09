module.exports.numberItemsWithProperty = function numberItemsWithProperty(array, prop, val) {
  if (typeof value === 'string') {
    value = value.toLowerCase();
  }

  array = array.filter(function (item) {
      return item.hasOwnProperty(prop) && item[prop] === val ? item : null;
    });

  return array.length > 0 ? array.length : '0';
};
