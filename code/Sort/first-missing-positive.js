/**
 * @param {number[]} nums
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/first-missing-positive/
 */
var firstMissingPositive = function(nums) {
    nums = nums.filter((item) => {
    	return item > 0;
    })
    nums = unique(nums);
    nums = nums.sort((a,b) => a-b);
    for(var i = 0; i < nums.length; i++){
    	if(nums[i] !== i + 1)
    		return i + 1
    }
    return i + 1
};

function unique (arr) {
  return Array.from(new Set(arr))
}