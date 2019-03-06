/**
 * @param {string} s
 * @return {int}
 * 题目：https://leetcode-cn.com/problems/count-binary-substrings/
 */
 export default (str) => {
 	// 建立数据结构，堆栈，保存数据
 	let r = [];
 	// 给定任意子输入都返回第一个符合条件的子串
 	let match = (str) => {
 		let j = str.match(/^(0+|1+)/)[0]// 从字符串的起始找到连续的0或者1
 		// 先找到n个0或者1，那么后面也要配上对应的1或者0
 		// let 0 = (j[0] ^ 1) 取反，eg：a=0,a^1=1
 		let o = (j[0] ^ 1).toString().repeat(j.length)// 这时o和j的长度是相等的，数值是相反的。
 		// repeat函数作用：a='s',a.repeat(3) = 'sss'
 		/* 这时j+o应该就是你要找的子串中符合条件的子子串 */
 		let reg = new RegExp(`^(${j}${o})`) // ES6字符串模版的妙用！！！！！
 		if(reg.test(str)) {
 			return RegExp.$1
 		} else {
 			return ''
 		}
 	}
 	// 通过for循环控制程序运行的流程
 	for(let i=0, len=str.length-1; i<len; i++){
 		let sub = match(str.slice(i))
 		if(sub)
 			r.push(sub)
 	}
 	return r.length
 }