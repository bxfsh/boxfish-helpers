export function exists(val, options) {
  if (typeof val !== 'undefined') {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
