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
    if(head === null)
        return head;
    // 交换链表两个元素的位置,只要交换他们的值即可,不需要交换指针位置
    function changePos(r, l){
    	let t = r.val;
    	r.val = l.val;
    	l.val = t;
    }

    // 寻找基准元素的节点
    // 基准元素的意思是: 左边比第一个元素大,右边比第一个元素小
    // 这里采用了+in-place算法
    function partion(start, end) {
    	let flag = start.val;
    	// 这里添加两个指针帮助递归
    	// p是基准元素位置记录指针,q是遍历指针
    	let p = start, q = start.next;
    	while(q !== end) {
    		if(q.val < flag){
    			p = p.next;
    			changePos(p, q)
    		}
    		q = q.next;
    	}
    	// 最后交换位置
    	changePos(start, p)
    	return p;
    }

    // 递归
    function sort(start, end){
    	if(start !== end) {
    		let mid = partion(start, end)
    		sort(start, mid)
    		sort(mid.next, end)
    	}
    }

    // 寻找尾指针位置
    let end = head;
    while(end.next !== null){
    	end = end.next;
    }
    end = end.next;

    sort(head, end);
    
    return head;
};



