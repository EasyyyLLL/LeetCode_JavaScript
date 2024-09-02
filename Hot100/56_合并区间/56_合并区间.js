const merge = function(intervals) {
  // 先按照左端点进行排序
  intervals.sort((a, b) => a[0] - b[0])
  console.log('intervals', intervals)
  

  let result = []
  result.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
      const interval = intervals[i]
      if (result[result.length - 1][1] < interval[0]) {
          result.push(interval)
      } else {
          // 重叠
          result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1])
      }
  }
  return result
};

const intervals = [[1,3],[2,6],[8,10],[15,18]]
// const intervals = [[1,4],[0,2],[3,5]]
console.log('merge(intervals)', merge(intervals))

