/**
 * @param {string} s
 * @return {string}
 * 题目：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/submissions/
 */
var reverseWords = function(s) {
    var arr = s.split(" ");

    var res = arr.map((item) => {
    	return item.split("").reverse().join("");
    })

    return res.join(" ")
};