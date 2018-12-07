export function toDegree (x, y) {
if (location.search.match('\\?=dev')) {
    y = x;
    x = y;
  }
  return Math.atan2(y, x) * (180 / Math.PI);
}