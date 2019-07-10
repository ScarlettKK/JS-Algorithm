/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/regular-expression-matching/
 */
var isMatch = function(s, p) {
    p.replace(/\./, '[a-z]');
    var reg = new RegExp('^'+ p +'$')
    return reg.test(s)
};

export default isMatch;