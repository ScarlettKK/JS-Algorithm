/**
 * @param {string} s
 * @return {string[]}
 * 题目：https://leetcode-cn.com/problems/restore-ip-addresses/
 */
var restoreIpAddresses = function(s) {
    // ip地址一共由4个部分组成,每个部分最小长度为1,最大长度为3
    // 也就是说,s的长度应该在4-12之间,超过这个范围即返回为空
    var len = s.length;
    if(len < 4 || len > 12)
    	return [];
    var res = [];
    function spellAddress (ip, rem){
    	if(ip.length === 4 && rem.length === 0) {
    		let oneip = ip.join('.')
    		// if(parseInt(ip[0]) !== 0 && parseInt(ip[3]) !== 0 && parseInt(ip[3]) !== 255)
    		if(res.indexOf(oneip) < 0 && oneip.length === len+3)
    			res.push(oneip);
    	} else {
    		var reslen = Math.min(3, rem.length)
    		for(let i = 1; i <= reslen; i++){
    			let cut = rem.substring(0, i)
    			if(parseInt(cut) <= 255) {
    				let newrem = rem.substring(i)
	    			let newip = ip.concat([parseInt(cut)])
	    			remlength = 4 - newip.length;
	    			if(newrem.length <= remlength*3 && newrem.length >= remlength)
	    				spellAddress(newip, newrem);
    			}
    		}
    	}
    }

    spellAddress([], s)
    return res;
};