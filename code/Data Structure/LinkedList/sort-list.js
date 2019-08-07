/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 题目: https://leetcode-cn.com/problems/sort-list/
 */

 // 要求:在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。 
 // 链表三大山: 创建 排序 查环
 // 这里快速排序最为合适
 // 采用+in-place算法
var sortList = function(head) {
    // 交换链表两个元素的位置,只要交换他们的值即可,不需要交换指针位置
    function changePos(r, l){
    	let t = r.val;
    	r.val = l.val;
    	l.val = t;
    }

    // 寻找基准元素的节点
    function partion(start, end) {
    	let flag = start.val;
    	let p = start, q = start.next;
    	while(q !== end) {
    		if(q.val < flag){
    			p = p.next;
    			changePos(p, q)
    		}
    		q = q.next;
    	}
    	changePos(start, p)
    	return p;
    }

    function sort(start, end){
    	if(start !== end) {
    		let mid = partion(start, end)
    		sort(start, mid)
    		sort(mid.next, end)
    	}
    }

    let end = head;
    while(end.next !== null){
    	end = end.next;
    }
    end = end.next;

    sort(head, end);

    return head;
};



