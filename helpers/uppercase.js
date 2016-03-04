export function uppercase(str) {
  if (typeof str === 'string') {
    console.warn('[Helper] Uppercase helper parameter should be a string');
    return str.toUpperCase();
  }
}
