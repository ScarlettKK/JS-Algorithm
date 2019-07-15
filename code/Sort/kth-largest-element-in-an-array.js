/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */
var findKthLargest = function(nums, k) {
    // nums.sort((a, b) => b - a)
    // return nums[k-1]
    var len = nums.length;
    // 冒泡排序
    // 设定冒泡排序的边界
    for(let i = len; i > 0; i--){
    	// 内层比较,将最大值冒泡到最后一个
    	for(let j = 0; j < i - 1; j++){
    		if(nums[j] > nums[j+1]){
    			let tmp = nums[j]
    			nums[j] = nums[j+1]
    			nums[j+1] = tmp
    		}
    	}
    	// 找到第K个最大值后,立即返回
    	if(len - i + 1== k)
    		return nums[len - k]
    }
    // 默认从大到小排序好后的数组的返回
    return nums[len - k]
};