/**
 * @param {number[]} A
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/sort-an-array/ 之快速排序实现
 */
var quickSort = function(nums) {
	// function sort (arr) {
	// 	let len = arr.length;
	// 	if(len < 2)
	// 		return arr;
	// 	else {
	// 		// 将第一个元素当成flag位置,比flag大的放在右边,小的放在左边,以此类推
	// 		let flag = arr[0];
	// 		let left = [];
	// 		let right = [];
	// 		for(let i = 1; i < len; i++) {
	// 			if(arr[i] < flag)
	// 				left.push(arr[i])
	// 			else
	// 				right.push(arr[i])
	// 		}
	// 		// 最后返回排序好的左边+flag+排序好的右边
	// 		return sort(left).concat(flag, sort(right));
	// 	}
	// }

	// return sort(nums);
/******************************************/
	// +in-place算法 高级快排,节省内存
	let len = nums.length;
	function sort(arr, start, end){
		if(start >= end){
			return;
		}
		else {
			let flag = arr[start];
			let changepos = start + 1;
			for(let i = start + 1; i <= end; i++) {
				if(arr[i] < flag){
					changePos(arr, i, changepos)
					changepos++;
				}
			}
			changePos(arr, start, changepos-1)
			sort(arr, start, changepos-2)
			sort(arr, changepos, end)
		}
	}

	function changePos(arr, pos1, pos2){
		let tmp = arr[pos1];
		arr[pos1] = arr[pos2];
		arr[pos2] = tmp;
	}

	sort(nums, 0, len-1)

	return nums
};