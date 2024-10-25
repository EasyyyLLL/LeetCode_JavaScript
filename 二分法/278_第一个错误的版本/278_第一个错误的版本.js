/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === null || null === 0) {
      return -1;
    }

    let left = 1;
    let right = n;

    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);

      if (isBadVersion(mid)) {
        // 正确版本
        right = mid;
      } else {
        // 错误版本
        left = mid + 1;
      }
    }
    return left;
  };
};

const n = 3;
const bad = 2;

const isBadVersion = (num) => {
  if (num >= bad) {
    return true;
  } else {
    return false;
  }
};

const judge = solution(isBadVersion);
console.log(judge(n));
