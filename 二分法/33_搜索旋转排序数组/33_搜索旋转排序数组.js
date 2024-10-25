/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let startIndex = 0;
  const n = nums.length;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] <= nums[i]) {
      continue;
    } else {
      startIndex = i;
      break;
    }
  }

  const midSearch = (left, right, nums) => {    
    let leftBorder = left;
    let rightBorder = right;

    while (leftBorder <= rightBorder) {
      const mid = Math.floor((leftBorder + rightBorder) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        rightBorder = mid - 1;
      } else {
        leftBorder = mid + 1;
      }
    }

    return false;
  };

  const left_1 = 0;
  const right_1 = startIndex - 1;
  const resultIndex = midSearch(left_1, right_1, nums);

  if (resultIndex !== false) {
    return resultIndex;
  } else {
    const left_2 = startIndex;
    const right_2 = n - 1;
    const resultIndex_2 = midSearch(left_2, right_2, nums);

    if (resultIndex_2 !== false) {
      return resultIndex_2;
    } else {
      return -1;
    }
  }
};

const nums = [1];
const tartget = 1;
console.log(search(nums, tartget));
