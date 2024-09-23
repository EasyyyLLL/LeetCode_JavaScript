/**
 * 动态规划方法求解俄罗斯套娃信封问题
 * @param {Array} envelopes 
 * @returns {Number} maxNum
 */
const maxEnvelopes = function(envelopes) {
    const n = envelopes.length

    if (n <= 1) return n

    envelopes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })

    const heightArr = envelopes.map(item => item[1])
    const dp = new Array(n).fill(1)

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (heightArr[i] > heightArr[j] && envelopes[i][0] > envelopes[j][0]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
    }
    
    return Math.max(...dp)
};

const envelopes = [[4,5],[4,6],[6,7],[2,3],[1,1]]
console.log(maxEnvelopes(envelopes))

console.log('----------------maxEnvelopesBinary----------------')
/**
 * 基于二分法的动态规划求解
 */
const maxEnvelopesBinary = (envelopes) => {
    const n = envelopes.length

    if (n <= 1) return n
    
    envelopes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

	const dp = [envelopes[0][1]]

	for (let i = 1; i < n; i++) {
		const hi = envelopes[i][1]

		if (hi > dp[dp.length - 1]) {
			dp.push(hi)
		} else {
			const k = binarySearch(dp, hi)
			dp[k] = hi
		}
	}

	return dp.length
}

const binarySearch = (dp, hi) => {
	let low = 0
	let high = dp.length - 1

	while (low < high) {
		const mid = Math.floor((high - low) / 2) + low

		if (dp[mid] < hi) {
			low = mid + 1
		} else {
			high = mid
		}
	}

	return low
}
const test2 = [[1,3],[3,5],[6,7],[6,8],[8,4],[9,5]]
console.log(maxEnvelopesBinary(test2))


