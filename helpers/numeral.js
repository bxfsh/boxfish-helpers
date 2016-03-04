export function numeral(number, format) {
  if (typeof format !== 'string') {
    format = '0,0.00';

    if (number > 10000) {
      format = '0.0a';
    }
  }

  return numeral(number).format(format);
}
