const findNumberOfLIS = function(nums) {
    const n = nums.length
    // dp[i] 表示以第i个元素结尾的最长递增子序列的长度
    const dp = new Array(n);
    // cnt[i] 表示以第i个元素结尾的最长递增子序列的个数
    const cnt = new Array(n);
    cnt[0] = 1;

    let maxLen = 1
    let ret = 0

    for (let i = 0; i < n; i++) {
        dp[i] = 1
        cnt[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1
                    cnt[i] = cnt[j]
                } else if (dp[i] === dp[j] + 1) {
                    cnt[i] = cnt[i] + cnt[j]
                }
            } 
        }

        if (dp[i] > maxLen) {
            maxLen = dp[i]
            ret = cnt[i]
        } else if (dp[i] === maxLen) {
            ret = ret + cnt[i]
        }
    }
    
    return ret
};


const nums = [2,2,2,2,2]
console.log(findNumberOfLIS(nums))

