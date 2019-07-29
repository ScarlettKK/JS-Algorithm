/**
 * @param {character[][]} matrix
 * @return {number}
 * 题目：https://leetcode-cn.com/problems/maximal-rectangle/
 */
 var maximalRectangle = function(matrix) {
    let result = [];
    // 至少两个1以上连着的部分
    let reg = /1{2,}/g
    // 把二维数组重新表达,将连续的相邻的1的位置提取出来(起始点+截止点)
    result = matrix.map((item) => {
    	let str = item.join('');
    	let r = reg.exec(str);
    	let res = []
    	while(r) {
    		rs.push([r.index, r.index + r[0].length -1])
    		r = reg.exec(str);
    	}
    	return res;
    })
 };