/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
const countGoodStrings = function (low, high, zero, one) {
  const MOD = 1_000_000_007;
  const dp = Array.from({ length: high + 1 }, () => 0);
  dp[0] = 1;

  for (let i = 1; i <= high; i++) {
    if (i - zero >= 0) {
      dp[i] = (dp[i] + dp[i - zero]) % MOD;
    }

    if (i - one >= 0) {
      dp[i] = (dp[i] + dp[i - one]) % MOD;
    }
  }

  let result = 0;
  for (let i = low; i <= high; i++) {
    result = result + dp[i];
  }

  return result % MOD;
};

const low = 3;
const high = 3;
const zero = 1;
const one = 1;
console.log(countGoodStrings(low, high, zero, one));
