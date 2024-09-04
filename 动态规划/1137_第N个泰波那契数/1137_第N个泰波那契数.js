const tribonacci = function(n) {
  if (n === 0) return 0

  if (n === 1 || n === 2) return 1

  let p = 0, q = 1, r = 1, w = 2

  for (let i = 0; i < (n-3); i++) {
      p = q
      q = r
      r = w
      w = p + q + w
  }

  return w
};