/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * 题目: https://leetcode-cn.com/problems/task-scheduler/
 */
var leastInterval = function(tasks, n) {
    /*
    	思想:
    	1. 分类所有的任务, 并且统计每种任务的个数
    	2. 思想上先排个数多的任务, 以防个数多的任务最后被剩下的多, 
    	   最后被剩下的都是相同任务的话, 冷却时间内没法去做其他任务, 导致该时间段被浪费
    	3. 规定n+1为一组, n是冷却时间, 我们需要保证冷却时间内不会有相同的任务,
    	   组长度不满足n+1的时候, 添加冷却时间
    	4. 建立组, 从现有的每类任务中, 找出未处理数最大的任务优先安排, 
    	   安排后就不再在现有分组中考虑安排该类任务(剔除)
    	   也要注意空任务的情况, 需要补齐冷却时间
    	5. 注意需要去掉最后一个分组的 空任务, 因为最后一个分组做完后就完成了, 不需要再添加冷却时间
    */
};
