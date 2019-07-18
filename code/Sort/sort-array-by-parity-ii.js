/**
 * @param {number[]} A
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/sort-array-by-parity-ii/
 */
var sortArrayByParityII = function(A) {
    var len = A.length;
    var res = [];
    // 保存当前奇位和偶位
    var even = 0, odd = 1;
    // 遍历数组
    for(let i = 0; i < len; i ++){
    	// 找到偶数
    	if(A[i] % 2 === 0){
    		// 保存下来
    		res[even] = A[i];
    		// 偶位前进两格
    		even += 2;
    	} else { // 找到奇数
    		res[odd] = A[i];
    		odd += 2;
    	}
    }
    return res;
};