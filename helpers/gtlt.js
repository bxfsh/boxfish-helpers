export function gtlt(a, b, options) {
  if (a > b || a < b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
