/**
 * @param {number[]} deck
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */
 export default (deck) => {
 	// 极端情况,deck只有一个元素,不符合题意,直接返回false
 	if(deck.length < 2)
 		return false;
 	// 对deck进行排序,使得相同的数字聚在一起
 	deck.sort((a,b) => a - b);
 	// 用于存储最后分组结果的数组
 	var res = [];
 	// 将最小组的长度,先设置为系统所能有的最大正整数(先设置得越大越好,方便后面更改成较小的数字)
 	var len = Number.MAX_SAFE_INTEGER;
 	// 二重循环分组
 	for(let i=0 ; i < deck.length - 1; i++){
 		// 开设一个数组存储当前分组,注意这里的数组需要每次都被重置(引用类型),所以用的let
 		let sameArr = [];
 		// 先存进第一个元素
 		sameArr.push(deck[i]);
 		// 第二层循环,查找 后面 跟第一个元素相同的所有数字,push进当前分组
 		for(var j = i + 1; j < deck.length; j++){
 			// 查找跟第一个元素相同的所有数字,push进当前分组,遇到第一个不同的数字(论排序的重要性),退出当前循环
 			if(deck[j] === sameArr[0]){
 				sameArr.push(deck[j])
 			} else {
 				break;
 			}
 		}
 		// 简单判断一下该分组长度是否为1,为1则不符合题目要求,直接return false
 		if(sameArr.length === 1){
 			return false;
 		}
 		// 先将当前分组push进 存储最后分组结果的数组中
 		res.push(sameArr)
 		// 求当前记录的最小分组长度 与 当前分组的长度 的最大公约数
 		var g = gcd(len, sameArr.length)
 		// 若最大公约数为1,则选择这两个值中最小的一个更新为 当前记录的最小分组长度
 		if(g <= 1){
 			len = Math.min(sameArr.length, len);
 		} else {
 			// 若最大公约数不为1,则将 当前记录的最小分组长度 更新为 它们的最大公约数
 			len = g;
 		}
 		// i跳到j-1的位置(当前分组的最后一位),重新开始(因为i有++,最后会移动到下一新组的第一位)
 		i = j-1;
 	}
 	// 判断是否每一分组的长度都是 最小分组长度 的整数倍
 	for(let i=0 ; i < res.length; i++){
 		// 不是,则return false
 		if(res[i].length%len !== 0)
 			return false;
 	}
 	return true;
 }

// 辗转相除法求最大公约数
 function gcd(a,b){
    if(b == 0){
        return a;
    }
    var r = a % b;
    return gcd(b,r);
 }