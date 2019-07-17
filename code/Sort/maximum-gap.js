/**
 * @param {number[]} nums
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/maximum-gap/
 */
var maximumGap = function(nums) {
	// 排序
    // nums.sort((a, b) => {
    // 	return a - b
    // })
    // var max = 0
    // // 遍历找最大gap
    // for(let i = 0; i < nums.length - 1; i++){
    // 	let gap = nums[i+1] - nums[i]
    // 	if(gap > max)
    // 		max = gap;
    // }
    var len = nums.length;
    var max = 0;
    // 冒泡排序
    for(let i = len; i > 0; i--){
    	for(let j = 0; j < i - 1; j ++){
    		if(nums[j] > nums[j + 1]) {
    			let tmp = nums[j];
    			nums[j] = nums[j + 1];
    			nums[j + 1] = tmp;
    		}
    	}
    	// 一边排序一边找最大gap,从排序好的最后两个元素开始找
    	if(len - i > 0){
    		let gap = nums[i] - nums[i-1]
    		if(gap > max)
	    		max = gap;
    	}
    }
    return max;
};