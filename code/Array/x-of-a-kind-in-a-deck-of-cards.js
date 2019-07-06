/**
 * @param {number[]} deck
 * @return {boolean}
 * 题目：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 */
 export default (deck) => {
 	if(deck.length < 2)
 		return false;
 	deck.sort((a,b) => a - b);
 	var res = [];
 	var len = Number.MAX_SAFE_INTEGER;
 	for(let i=0 ; i < deck.length - 1; i++){
 		let sameArr = [];
 		sameArr.push(deck[i]);
 		for(var j=i + 1; j < deck.length; j++){
 			if(deck[j] === sameArr[0]){
 				sameArr.push(deck[j])
 			} else {
 				break;
 			}
 		}
 		if(sameArr.length === 1){
 			return false;
 		}
 		res.push(sameArr)
 		var g = gcd(len, sameArr.length)
 		if(g <= 1){
 			len = Math.min(sameArr.length, len);
 		} else {
 			len = g;
 		}
 		i = j-1;
 	}
 	for(let i=0 ; i < res.length; i++){
 		if(res[i].length%len !== 0)
 			return false;
 	}
 	return true;
 }

 function gcd(a,b){
    if(b == 0){
        return a;
    }
    var r = a % b;
    return gcd(b,r);
 }