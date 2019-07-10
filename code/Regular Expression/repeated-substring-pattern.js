/**
 * @param {string} s
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/repeated-substring-pattern/
 */
var repeatedSubstringPattern = function(s) {
	/*
		正则表达式解析:
		^:     匹配输入的开始
		():    捕获括号
		[a-z]: 小写字母字符集
		+:     匹配前面一个表达式1次或者多次
		\1:    反向引用, ‘\1’ 匹配的是 所获取的第1个()匹配的引用。例如，’(\d)\1’ 匹配两个连续数字字符。如33aa 中的33 
		$:     匹配输入的结束
	*/

	/*
		“()\1” 深度解释:
			1. \1 等于 () 中匹配的内容
			2. (\w+)\1 中, 不管 (\w+) 部分是几位值，只要 \1 的内容和 (\w+) 部分是值相同就符合条件
				如: 使用(\w+)\1, abcabcabc 会匹配到 abcabc, 因为按照上面的说法, (\w+)\1是匹配两个连续的字符串
				    使用(\w+)\1+, abcabcabc 会匹配到 abcabcabc, 后面有+号后, 可以匹配到任意多个连续的重复相同的子字符串
		来源: https://segmentfault.com/q/1010000012552849
	*/

    var reg = new RegExp(/^([a-z]+)\1+$/);
    return reg.test(s);
};

export default repeatedSubstringPattern;
