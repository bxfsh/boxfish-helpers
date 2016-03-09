module.exports.tmdb = function tmdb(url, size, options) {
  if (arguments.length <= 2) size = null;

  if (!url) return '/images/missing.png';

  if (size && typeof size !== 'string') {
    console.warn('Size parameter should be a string (e.g \'w300\', \'original\' etc)');
    return;
  }

  if (/(https|http)\:\/\/image\.tmdb\.org\/t\/p\/w300(null)*$/ig.test(url)) {
    return '/images/missing.png';

  } else {

    if (size && url) {

      url = url.split('/');
      url[url.indexOf('p') + 1] = size;
      url = url.join('/');
      return url;

    } else return url;

  }
};
