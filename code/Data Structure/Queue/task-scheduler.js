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

    	[思考] 不用担心按照上面方案会出现 [A, B, C][B, C, E]  这样的情况(B冷却时间不足)
	    	  因为任务执行顺序 是以 每类任务多少个 来进行排序的
	    	  如上面的例子, 第一个分组为[A, B, C], 那么也就是说明A任务的个数是比B任务多的, 至少等于B任务的个数
	    	  那么在第二轮分组的时候, A的顺序也一定在B任务前面, 
	    	  因为A、B任务在第一轮中也就各执行了一次, 且A任务个数>=B任务个数, 所以不会出现B忽然跑到了A前面的情况
    */
    var classifyTasks = {};
    var len = tasks.length;
    // 分类所有的任务, 并且统计每种任务的个数
    for(let i=0; i < len; i++){
        if(!classifyTasks[tasks[i]]){
            classifyTasks[tasks[i]] = 1;
        } else {
            classifyTasks[tasks[i]] ++;
        }
    }

    // 储存最后的任务调度结果
    var res = [];

    while(tasks.length > 0){
        // 深拷贝一份classifyTasks
        let obj = JSON.parse(JSON.stringify(classifyTasks));
        // 规定n+1为一组, n是冷却时间, 我们需要保证冷却时间内不会有相同的任务
        for(let i=0; i < n+1; i++){
            // 从现有的每类任务中, 找出未处理数最大的任务优先安排
            let max = findMax(obj)
            // 也要注意空任务的情况, 需要补齐冷却时间
            if(!max) {
                res.push('-')
            } else {
                // 优先安排未处理数最大的任务
                res.push(max);
                // 该任务计数减一
                classifyTasks[max] --;
                // 已经安排过的任务在这一组中我们不会再考虑
                delete obj[max];
                // 因为已经安排过一个任务,我们随意pop出tasks中的一个任务,为的是减少长度
                tasks.pop()
            }
        }
    }
    
    // 注意需要去掉最后一个分组的 空任务, 因为最后一个分组做完后就完成了, 不需要再添加冷却时间
    var l = res.length;
    while(res[res.length-1] === '-'){
        res.pop()
    }
    
    // 返回结果
    return res.length;


    // 找出当前未处理数最大的任务优先安排
    function findMax(obj){
        let res;
        let max = 0;
        for (let key in obj) {
            if(obj[key] > max){
                max = obj[key];
                res = key;
            }
        }
        if(max > 0)
            return res;
        else
            return undefined;
    }
};









