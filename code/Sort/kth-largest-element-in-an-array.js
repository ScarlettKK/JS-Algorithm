/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a)
    return nums[k-1]
};