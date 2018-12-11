export function toDegree (x, y) {
if (window.is_page_rotated) {
    var old_y = y;
    y = x;
    x = 1080 - old_y;
  }
  return Math.atan2(y, x) * (180 / Math.PI);
}
