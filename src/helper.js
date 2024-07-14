export function roundTo(value, step = 1.0) {
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}
