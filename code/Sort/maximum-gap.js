/**
 * @param {number[]} nums
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/maximum-gap/
 */
var maximumGap = function(nums) {
	// 排序
    nums.sort((a, b) => {
    	return a - b
    })
    var max = 0
    // 遍历找最大gap
    for(let i = 0; i < nums.length - 1; i++){
    	let gap = nums[i+1] - nums[i]
    	if(gap > max)
    		max = gap;
    }
    return max;
};