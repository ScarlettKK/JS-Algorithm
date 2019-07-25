/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */
 // 这里只是一般的解法,上leetcode是超时了
var findSubstring = function(s, words) {
	// 特殊情况处理
	if(s === "" ||  words.length === 0)
        return [];
    var subStrings = [];
	var res = [];
	// 根据传入的words拼出所有可能的子串
	// 传入两个数值,剩下可以用于拼接的字符串数组remWords,以及当前拼接好的子串sub
    function getSubString(remWords, sub){
    	let len = remWords.length;
    	// 结束条件:剩下可以用于拼接的字符串数组长度为空
    	if(len === 0){
    		// 去重子串
    		if(subStrings.indexOf(sub) < 0){
    			// subStrings数组用于记录所有可能的子串
    			subStrings.push(sub)
    		}
    	} else {
    		for(let i=0; i < len; i++){
    			// 深拷贝一个数组的方法
    			let newRemWords = [].concat(remWords);
    			// 从剩下可以用于拼接的字符串数组中,取出并删除第i个元素partofsub
    			let partofsub = newRemWords.splice(i,1)
    			// 递归: 剩下的可以用于拼接的字符串数组,以及拼接好的新子字符串
    			getSubString(newRemWords, sub+partofsub)
    		}
    	}
    }

    getSubString(words, '');

    // 查找子字符串们在s中的位置
    let len = subStrings.length;
    for(let i=0; i < len; i++){
    	let pos = s.indexOf(subStrings[i])
    	let curS = s;
    	// 可能一个子字符串会在s中出现多次,需要把它们都找出来
    	while(pos >= 0){
    		res.push(pos+s.length - curS.length)
    		curS = curS.slice(pos+1)
    		pos = curS.indexOf(subStrings[i])
    	}
    }
    return res;
};