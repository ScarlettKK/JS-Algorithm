/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 题目: https://leetcode-cn.com/problems/sort-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    function sort (arr) {
		let len = arr.length;
		if(len < 2)
			return arr;
		else {
			// 将第一个元素当成flag位置,比flag大的放在右边,小的放在左边,以此类推
			let flag = arr[0].val;
			let left = [];
			let right = [];
			for(let i = 1; i < len; i++) {
				if(arr[i].val < flag)
					left.push(arr[i])
				else
					right.push(arr[i])
			}
			// 最后返回排序好的左边+flag+排序好的右边
			return sort(left).concat(flag, sort(right));
		}
	}

	return sort(nums);
};