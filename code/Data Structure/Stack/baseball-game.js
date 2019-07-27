/**
 * @param {string[]} ops
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/baseball-game/
 */
 var calPoints = function(ops) {
 	var res = [];
 	ops.forEach((item) => {
 		switch(item) {
 			case 'C':
 				if(res.length > 0)
 					res.pop()
 				break;
 			case 'D':
 				var len = res.length;
 				if(len > 0)
 					res.push(res[len-1]*2)
 				break;
 			case '+':
 				var len = res.length;
 				if(len > 1)
 					res.push(res[len-1]+res[len-2])
 				break;
 			default:
 				res.push(item * 1)
 		}
 	})
    return res.reduce((total, num) => {
	    return total + num;
	})
 };