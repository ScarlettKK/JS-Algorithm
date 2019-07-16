/**
 * @param {number[]} nums
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/first-missing-positive/
 */
var firstMissingPositive = function(nums) {
	// 去掉负整数以及0
    nums = nums.filter((item) => {
    	return item > 0;
    })
    // 数组去重
    nums = unique(nums);
    // 排序
    nums = nums.sort((a,b) => a-b);
    // 遍历数组
    for(var i = 0; i < nums.length; i++){
    	// 若组内元素不满足1...len的排序,找到缺失的第一个正数为i+1
    	if(nums[i] !== i + 1)
    		return i + 1
    }
    // 若数组内元素满足1...len的排序,则输出len+1
    return i + 1
};

// ES6去重大法set
// Set对象是ES6中新定义的数据结构，类似于数组，它允许你存储任何类型的唯一值，不管是原始值还是对象引用。
// 利用扩展运算符可以将Set转换成真正意义上的数组。let uniqueArr = [...new Set(arr)];
function unique (arr) {
  return Array.from(new Set(arr))
}