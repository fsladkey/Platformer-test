export function range(start, end, cb) {
  const result = [];
  for (var i = start; i < end; i++) {
    result.push((cb && cb()) || i);
  }
  return result;
}
