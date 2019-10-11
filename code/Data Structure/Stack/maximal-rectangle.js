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
        // 将一行的 0 和 1 合并起来成一个字符串
    	let str = item.join('');

        // exec() 方法用于检索字符串中的正则表达式的匹配。
        // 如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。
        /*
        例如: let r = reg.exec("001110111");
        r: ["111", index: 2, input: "001110111", groups: undefined]
        */
    	let r = reg.exec(str);

    	let res = []
    	// 提取一行中所有连续的1
    	while(r) {
            // 获取1的起始位置和结束位置 [0,0,1,1,1,0,1,1,1] => [[2,4],[6,8]]
    		res.push([r.index, r.index + r[0].length -1])
            /*
            当 exec() 找到了与表达式相匹配的文本时，在匹配后，
            它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。
            这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。
            当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
            */
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










 