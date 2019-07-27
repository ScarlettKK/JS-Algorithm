/**
 * @param {string[]} ops
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/baseball-game/
 */
 var calPoints = function(ops) {
 	// 用res数组来记录每一轮的得分
 	var res = [];
 	// 遍历数组
 	ops.forEach((item) => {
 		// 这里用switch语法会更加明了优雅
 		switch(item) {
 			case 'C':
 				// "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。
 				// 保证不会数组越界
 				if(res.length > 0)
 					res.pop()
 				break;
 			case 'D':
 				// "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
 				var len = res.length;
 				// / 保证不会数组越界
 				if(len > 0)
 					res.push(res[len-1]*2)
 				break;
 			case '+':
 				// "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
 				var len = res.length;
 				// 保证不会数组越界
 				if(len > 1)
 					res.push(res[len-1]+res[len-2])
 				break;
 			default:
 				// 整数（一轮的得分）：直接表示您在本轮中获得的积分数。
 				// 因为这里输入的数字都是字符串
 				// 下面这里是字符串版数字转num类型的最快方法
 				res.push(item * 1)
 		}
 	})
 	// 最后返回的是得分的总和,这里用了JS数组自带的reduce API
 	// 参考:https://www.runoob.com/jsref/jsref-reduce.html
    return res.reduce((total, num) => {
	    return total + num;
	})
 };