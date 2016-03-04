export function truncate(val = '', wordwise, max, tail = ' ...') {

  max = parseInt(max, 10);
  if (!max) return val;
  if (val.length <= max) return val;

  val = val.substr(0, max);
  if (wordwise) {
    let lastspace = val.lastIndexOf(' ');
    if (lastspace != -1) {
      val = val.substr(0, lastspace);
    }
  }

  return val + tail;
}
