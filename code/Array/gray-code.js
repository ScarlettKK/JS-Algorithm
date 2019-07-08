/**
 * @param {number} n
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/gray-code/
 */
export default (n) => {
	// 特殊情况处理
	if(n === 0)
		return [0];
	// n位数找格雷编码
	var gcode = getGrayCode(n);
	var res = [];
	// 二进制编码转十进制输出
	for(let i = 0 ; i < gcode.length ; i ++) {
		res[i] = parseInt(gcode[i],2)
	}
	return res;
};

function getGrayCode (n) {
	// 当n=1,直接返回结果
	if(n === 1){
		return ['0' , '1'];
	} else {
		// 由于n位数的格雷编码与n-1有关(见分析),所以这里递归回去找n-1
		var last = getGrayCode(n - 1)
		var res = [];
		// n位的格雷编码理应有这个长度,-1是为了对应数组下标从0开始
		var arrLength = Math.pow(2, n) - 1;
		// 镜像拼接
		for(let i = 0; i < last.length; i++){
			// 正着拼0+
			res[i] = '0' + last[i];
			// 反着拼1+
			res[arrLength - i] = '1' + last[i];
		}
		// 返回结果
		return res;
	}
}