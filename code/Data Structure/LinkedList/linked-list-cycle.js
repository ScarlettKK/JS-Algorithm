/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 题目: https://leetcode-cn.com/problems/linked-list-cycle/
 */

 // 链表查环之标记法
var hasCycle = function(head) {
    var p = head;
    while(p){
    	// 如果碰到带标记的链表节点,说明该节点之前已经访问过,则说明存在环
    	if(p.visited)
    		return true;
    	else {
    		// 给之前没访问过的链表节点,添加标记visited
    		p.visited = true;
    		// 遍历链表
    		p = p.next;
    	}
    }
    // 遍历了一遍,到这一步还没有return,则说明不存在环
    return false;
};