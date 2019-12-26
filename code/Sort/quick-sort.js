
// 既然递归是一个反复调用自身的过程，这就说明它每一级的功能都是一样的，因此我们只需要关注一级递归的解决过程即可。
// 我们需要关心的主要是以下三点：

// 	整个递归的终止条件。

// 	一级递归需要做什么？

// 	***应该返回给上一级的返回值是什么？***

// 因此，也就有了我们解递归题的三部曲：

// 	找整个递归的终止条件：递归应该在什么时候结束？

// 	***找返回值：应该给上一级返回什么信息？***

// 	本级递归应该做什么：在这一级递归中，应该完成什么任务？


// ********** 递归调用时候的假设: 返回值是对的,且已经排序好的 ************
// 快排: 操作A:(将第一个元素当成flag位置,比flag大的放在右边,小的放在左边)再分别对右边区域、左边区域进行操作A,以此类推
// 归并: 操作B:(将数组分割成两半,分别将这两半进行操作B使其内部有序,再将这两半有序结合)


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
	// 思想:先保持flag位首位不动
	// 将比flag元素小的的元素慢慢移动到数组的前半部分,flag位(首位)之后的位置
	// 这样就会形成 [flag 小1 小2 小3 大1 大2 大3 4]的情况
	// 再将flag位与比其小的最后一位 (下面的changepos变量就是专门用于记录这个位置) 交换位置
	// 就会形成[小3 小1 小2 flag 大1 大2 大3 大4]的情况
	// 递归flag的左右两边,即可达到我们的目的
	let len = nums.length;
	function sort(arr, start, end){
		// 终止条件
		if(start >= end){
			return;
		}
		else {
			// 标志判断位为数组内起始位的第一个元素
			let flag = arr[start];
			// 交换位为数组内起始位的第一个元素的下一位
			let changepos = start + 1;
			// 遍历数组,从start到end
			for(let i = start + 1; i <= end; i++) {
				// 如果有元素小于标志位数字
				if(arr[i] < flag){
					// 将这个元素的位置与交换位上的数字交换
					changePos(arr, i, changepos)
					// 交换位往前进一步
					changepos++;
				}
			}
			// 将标志位元素 与 交换位的上一位元素位置交换
			// 从而达到比标志位小的元素都在左边的效果
			changePos(arr, start, changepos-1)
			// 递归左半部分
			sort(arr, start, changepos-2)
			// 递归右半部分
			sort(arr, changepos, end)
		}
	}

	// 用于位置交换的函数
	function changePos(arr, pos1, pos2){
		let tmp = arr[pos1];
		arr[pos1] = arr[pos2];
		arr[pos2] = tmp;
	}

	sort(nums, 0, len-1)

	return nums
};


// 归并
function mergeSort(arr){
	var len = arr.length;
	// 终止条件
	if(len < 2)
		return arr;

	// 拿到排序好的左边
	var left = mergeSort(arr.slice(0, Math.floor(len/2)));
	// 拿到排序好的右边
	var right = mergeSort(arr.splice(Math.floor(len/2)));

	// 左边右边有顺序地拼接起来
	return merge(left, right)
	// 或者这么写: return merge(mergeSort(arr.slice(0, Math.floor(len/2))), mergeSort(arr.splice(Math.floor(len/2))))
}

function merge(left,right){
	var res = [];
	while(left.length > 0 && right.length > 0){
		if(left[0] > right[0]){
			res.push(right[0])
			right.splice(0,1)
		} else {
			res.push(left[0])
			left.splice(0,1)
		}
	}
	return res.concat(left, right)
}


// 冒泡
function boble(arr){
	var len = arr.length;
	// 第一层循环(标志找到最大的第几位, 0为1)
	for(let i=0; i<len; i++){
		// 第二层循环, 每次找前面的最大值放在最后面(所以到倒数第二位循环截止)
		for(let j=0; j<len-i-1; j++){
			// 交换位置
			if(arr[j] > arr[j+1]){
				var t = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = t;
			}
		}
	}
	return arr;
}