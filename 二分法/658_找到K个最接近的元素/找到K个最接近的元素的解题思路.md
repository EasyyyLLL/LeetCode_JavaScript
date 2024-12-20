# 找到K个最接近的元素

给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

* $|a - x| < |b - x|$ 或者
* $|a - x| == |b - x|$ 且 $a < b$

## 问题分析

本题要求我们在一个**已排序好**的数组 `arr` 中，找到**最靠近给定值** `x` 的 `k` 个数，并以升序返回结果。找到的元素需要满足与 `x` 的 **绝对差最小** ，如果有多个元素满足相同的绝对差，则选择较小的值。

由于数组是排序的，我们可以利用**二分查找**来实现一个高效的查找算法，这样可以降低查找的时间复杂度。


## 二分算法解法

### 解题思路概述

1. **使用二分查找定位到最接近 `x` 的位置** ：

* 二分查找是一种有效的方式，能够快速定位 `x` 在排序数组 `arr` 中 **最接近的位置** 。这可以显著减少后续查找的范围，使得查找过程更加高效。

1. **从最接近的位置开始扩展窗口，找到 `k` 个最接近 `x` 的元素** ：

* 利用二分查找找到的最接近位置后，我们可以定义一个窗口，并 **向两边扩展** ，以找到总共 `k` 个最接近的元素。

1. **返回找到的元素** ：

* 由于 `arr` 是排序好的，因此滑动窗口直接返回的结果自然是按升序排列的。

### 代码思想的详细步骤

代码实现的整体思想可以分为两个主要步骤：

1. **定位到与 `x` 最接近的位置** 。
2. **通过窗口扩展来找到最终的 `k` 个元素** 。

#### 1. 二分查找找到最接近 `x` 的位置

* 我们先使用**二分查找**来确定 `x` 在 `arr` 中的 **插入位置** ，即找到一个位置 `left`，使得 `arr[left]` 是最接近 `x` 或大于等于 `x` 的元素。
* 通过二分查找，不一定能找到精确等于 `x` 的值，但我们可以找到 **最接近的位置** ，例如：
  * 如果 `x` 在数组的某个范围内，我们找出距离 `x` 最近的索引。
  * 如果 `x` 比数组中的所有元素都小，返回的是 `0`。
  * 如果 `x` 比数组中的所有元素都大，返回的是数组的最后一个位置。
* 这一步的时间复杂度是 `O(log n)`。

#### 2. 扩展窗口找到最接近的 `k` 个元素

* **初始化左右指针** ：
* `right` 被设置为二分查找返回的最接近的位置。
* `left` 被设置为 `right - 1`，即最接近位置的左侧。
* **滑动窗口扩展** ：
* 我们需要找到 `k` 个元素，因此采用**滑动窗口扩展**的策略，左右指针同时扩展：
  * 如果 **左指针 `left` 越界** （即小于 `0`），只能向右扩展。
  * 如果 **右指针 `right` 越界** （即大于数组的末尾），只能向左扩展。
  * 如果两边均在数组边界内，则比较 `arr[left]` 和 `arr[right]` 与 `x` 的差距：
    * 如果 `|arr[left] - x| <= |arr[right] - x|`，说明左侧元素更接近或相等，我们选择左侧，移动 `left` 向左。
    * 否则，选择右侧，移动 `right` 向右。
* 每次扩展一次窗口，我们需要将 `k` 减 1，直到找到 `k` 个元素为止。
* 这一步的时间复杂度是 `O(k)`，因为我们需要找到 `k` 个元素，并且滑动窗口操作最多只进行 `k` 次。

#### 3. 返回最终结果

* 由于我们使用了滑动窗口策略，因此我们知道**最终的窗口范围**是从 `left + 1` 到 `right`。
* 直接返回 `arr.slice(left + 1, right)` 即可，这样可以保证结果是升序的。
