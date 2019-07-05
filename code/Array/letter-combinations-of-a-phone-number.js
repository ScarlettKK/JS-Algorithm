/**
 * @param {string} s
 * @return {Array}
 * 题目：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */
 function getCombination (arr) {
 	var res = [];
 	for(let i = 0; i < arr[0].length; i++){
 		for(let j = 0; j < arr[1].length; j++) {
 			res.push(arr[0][i] + arr[1][j]);
 		}
 	}
 	arr.splice(0, 2, res)
 	if(arr.length > 1)
 		return getCombination(arr)
 	else
 		return arr[0];
 }

 export default (digits) => {
 	if(digits == '')
        return [];
    var letter = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
 	var num = digits.split("");
 	var letters = [];
 	num.forEach((i) => {
        if(letter[i])
 		    letters.push(letter[i])
 	})
    if(letters.length == 1)
        return letters[0].split("");
    else
 	    return getCombination(letters);
 }
