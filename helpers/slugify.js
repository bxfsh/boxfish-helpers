export function slugify(str) {
  if (typeof str !== 'string') {
    console.warn('[Helpers] \'slugify\' parameter should be a string');
    return;
  }

  return str.toLowerCase().replace(/\s+/ig, '-').replace(',', '');
}
