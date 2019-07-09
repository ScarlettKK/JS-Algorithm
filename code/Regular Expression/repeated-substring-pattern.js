/**
 * @param {string} s
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/repeated-substring-pattern/
 */
var repeatedSubstringPattern = function(s) {
    var reg = new RegExp(/^([a-z]+)\1+$/);
    return reg.test(s);
};

export default repeatedSubstringPattern;