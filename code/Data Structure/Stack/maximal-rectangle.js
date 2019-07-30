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
    // [0,0,1,1,1,0,1,1,1] => [[2,4],[6,8]]
    matrix = matrix.map((item) => {
    	let str = item.join('');
    	let r = reg.exec(str);
    	let res = []
    	// 提取一行中所有连续的1
    	while(r) {
    		rs.push([r.index, r.index + r[0].length -1])
    		r = reg.exec(str);
    	}
    	return res;
    })
    // 通过递归以及出栈压栈计算相邻的矩阵
    // 通过两行起始点+截止点的交叉部分来计算交叉点
    // 这里的n是拿来记录交叉计算了几行的,因为这里的交叉只能得到几列到几列
    let maxRect = (arr, result, n=1) => {
    	// 第一行第二行出栈
    	let top = arr.pop();
    	let next = arr.pop();
    	// 再来计算相交的位置
    	var start, end
    }
 };