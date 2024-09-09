const longestPalindrome = function(s) {
  const n = s.length

  if (n === 1) return s

  if (n === 2 && s[0] === s[1]) return s

  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let start = 0
  let maxLength = 1

  for (let i = 0; i < n; i++) {
      // 一个字符组成的子串就是回文子串
      dp[i][i] = 1

      if (i < n-1 && s[i] === s[i+1]) {
          // 两个相邻且相同的字符组成的子串也是回文子串
          dp[i][i+1] = 1
          start = i
          maxLength = 2
      }
  }

  // 现在来处理三个以及三个以上的回文子串
  for (let len = 3; len <= n; len++) {
      for (let i = 0; i < n; i++) {
          const j = len + i - 1

          if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
              dp[i][j] = 1
              start = i
              maxLength = len
          }
      }
  }
  console.log('dp', dp);

  return s.slice(start, start + maxLength)
};

const s = 'ac'
console.log(longestPalindrome(s))
