/**
 * @param {number} n
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/gray-code/
 */
export default (n) => {
	if(n === 0)
		return [0];
	var gcode = getGrayCode(n);
	var res = [];
	for(let i = 0 ; i < gcode.length ; i ++) {
		res[i] = parseInt(gcode[i],2)
	}
	return res;
};

function getGrayCode (n) {
	if(n === 1){
		return ['0' , '1'];
	} else {
		var last = getGrayCode(n - 1)
		var res = [];
		var arrLength = Math.pow(2, n) - 1;
		for(let i = 0; i < last.length; i++){
			res[i] = '0' + last[i];
			res[arrLength - i] = '1' + last[i];
		}
		return res;
	}
}