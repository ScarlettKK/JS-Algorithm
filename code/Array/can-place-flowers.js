/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/can-place-flowers/
 */
export default (flowerbed, n) => {
	// 计数器
	var count = 0;
	// 花坛长度
	var len = flowerbed.length;
	// 先看看是否开头为空[0,0,...]的情况,这里两个空位就可以有一花    // 这里是预防[0]的情况
	if(flowerbed[0] === 0 && flowerbed[1] === 0 || flowerbed[0] === 0 && len === 1)
		count ++;
	// 再看看结尾为空[...,0,0]的情况,这里两个空位就可以有一花 
	// 但需要预防[0,0]的情况
	if(len > 2){
		if(flowerbed[len-1] === 0 && flowerbed[len-2] === 0)
			count ++;
	}
	// 好了去了一头一尾我们开始算中间的0,因为去头去尾所以这里的循环从1开始,到len-2结束
	for(let i = 1; i < len-1; i ++) {
		// 开始找中间一组一组的0,先找到第一个0,1的话我们就直接跳过
		if(flowerbed[i] === 0) {
			let zero = 0;
			let j = i;
			// 找这个0后面所有的0,为一组,直到倒数第二位(去头去尾,头尾已经算过了)
			while(flowerbed[j] === 0 && j < len-1){
				zero ++;
				j ++;
			}
			// zero是该组拥有的0的长度,Math.ceil(zero / 2) - 1可以算出这组0里面最多可以种几朵花
			count += Math.ceil(zero / 2) - 1
			// i跳到这组0的最后一位,考虑到i会++
			i = j - 1;
		}
	}
	// 如果想种花的数量 小于等于 我们统计出来的最大可种花数,则返回true,否则false
	if(n <= count)
		return true;
	else
		return false;
};