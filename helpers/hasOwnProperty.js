export function hasOwnProperty(obj, prop, options) {
  if (obj.hasOwnProperty(prop)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
