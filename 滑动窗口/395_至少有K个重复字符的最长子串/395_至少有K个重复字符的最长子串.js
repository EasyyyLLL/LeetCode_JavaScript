/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
    const n = s.length;
    let maxLen = 0;
    const maxUniqueChars = new Set(s).size;

    for (let uniqueChar = 1; uniqueChar <= maxUniqueChars; uniqueChar++) {
        const countMap = new Map();
        let left = 0;
        let uniqueCount = 0; // 窗口内的字符种类，不能超过uniqueChar
        let atLeastKCount = 0; // 有多少个字符的出现次数大于等于k

        for (let right = 0; right < n; right++) {
            const currentChar = s[right];
            countMap.set(currentChar, (countMap.get(currentChar) || 0) + 1);

            if (countMap.get(currentChar) === 1) uniqueCount++;

            if (countMap.get(currentChar) === k) atLeastKCount++;

            while (uniqueCount > uniqueChar) {
                const leftChar = s[left];
                countMap.set(leftChar, countMap.get(leftChar) - 1);

                if (countMap.get(leftChar) === k - 1) atLeastKCount--;

                if (countMap.get(leftChar) === 0) uniqueCount--;

                left++;
            }

            if (uniqueCount === uniqueChar && atLeastKCount === uniqueCount) {
                maxLen = Math.max(maxLen, right - left + 1);
            }

        }
    }

    return maxLen;
};

const s = "aaabb";
const k = 3;
console.log(longestSubstring(s, k));
