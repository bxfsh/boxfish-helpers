export function arrayContains(array = [], value = '', options) {
  if (!array.length || !value) return;

  if (array.indexOf(value) > -1) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
