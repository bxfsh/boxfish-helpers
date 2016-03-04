export function joinObject(array = [], prop, separator, options) {
  var ret = '';

  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (item.hasOwnProperty(prop)) {
      if (i == array.length - 1) ret += item[prop];
      else ret += item[prop] + separator;
    }
  }

  return ret;
}
