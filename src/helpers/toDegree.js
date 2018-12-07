export function toDegree (x, y) {
  return Math.atan2(y, x) * (180 / Math.PI);
}