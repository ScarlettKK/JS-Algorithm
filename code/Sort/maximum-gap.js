/**
 * @param {number[]} nums
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/maximum-gap/
 */
var maximumGap = function(nums) {
    nums.sort((a, b) => {
    	return a - b
    })
    var max = 0
    for(let i = 0; i < nums.length - 1; i++){
    	let gap = nums[i+1] - nums[i]
    	if(gap > max)
    		max = gap;
    }
    return max;
};