/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 题目：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
 */
var findSubstring = function(s, words) {
	if(s === "" ||  words.length === 0)
        return [];
    var subStrings = [];
	var res = [];
    function getSubString(remWords, sub){
    	let len = remWords.length;
    	if(len === 0){
    		if(subStrings.indexOf(sub) < 0){
    			subStrings.push(sub)
    		}
    	} else {
    		for(let i=0; i < len; i++){
    			// 深拷贝一个数组的方法
    			let newRemWords = [].concat(remWords);
    			let partofsub = newRemWords.splice(i,1)
    			getSubString(newRemWords, sub+partofsub)
    		}
    	}
    }

    getSubString(words, '');
    let len = subStrings.length;
    for(let i=0; i < len; i++){
    	let pos = s.indexOf(subStrings[i])
    	let curS = s;
    	while(pos >= 0){
    		res.push(pos+s.length - curS.length)
    		curS = curS.slice(pos+1)
    		pos = curS.indexOf(subStrings[i])
    	}
    }
    return res;
};