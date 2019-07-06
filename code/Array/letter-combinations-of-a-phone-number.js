/**
 * @param {string} s
 * @return {Array}
 * 题目：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

 export default (digits) => {
 	// 极端情况,空字符串(无数字)
 	if(digits == '')
        return [];
    // 让数字与英文字母达成一一映射的关系,这里因为数字是从2-9,所以这里的数组也是从第3个(下标为2)开始的
    var letter = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    // 分割数字各个位
 	var num = digits.split("");
 	var letters = [];
 	// 建立数字->英文字母的一一对应关系
 	num.forEach((i) => {
        if(letter[i])
 		    letters.push(letter[i])
 	})
 	// 极端情况,只有一位数字
    if(letters.length == 1)
        return letters[0].split("");
    // 其他情况,需要结合几位数字来处理
    else
 	    return getCombination(letters);
 }

 function getCombination (arr) {
 	var res = [];
 	// 先将前两位数字代表的字母来结合[abc][def]
 	for(let i = 0; i < arr[0].length; i++){
 		for(let j = 0; j < arr[1].length; j++) {
 			res.push(arr[0][i] + arr[1][j]);
 		}
 	}
 	// 结合完成,删除掉前两位数字代表的字母数组,改为由结合好的数组代替
 	// [abc] [def] -> ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 	arr.splice(0, 2, res)
 	// 判断是否还有其他数字代表的字母需要结合,如有则需要递归(继续结合前两个)
 	if(arr.length > 1)
 		return getCombination(arr)
 	// 没有其他数字代表的字母需要结合,数组长度只剩1,直接返回
 	else
 		return arr[0];
 }
