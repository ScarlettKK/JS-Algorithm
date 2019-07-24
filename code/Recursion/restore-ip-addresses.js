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
    // 结果记录数组
    var res = [];
    // 拼IP地址的函数,传入两个参数,当前拼好的ip地址块,以及剩下的字符串
    function spellAddress (ip, rem){
    	// 结束条件: 当IP数组长度为4(拼接完完整的4块),且剩下的字符串长度为0
    	if(ip.length === 4 && rem.length === 0) {
    		// ip字符串拼接出来最后的结果 xx.xx.xx.xx
    		let oneip = ip.join('.')
    		// IP地址在实际应用中,应首位不为0,最后一位不为0或255,这里leetcode的题目没有作严谨要求
    		// if(parseInt(ip[0]) !== 0 && parseInt(ip[3]) !== 0 && parseInt(ip[3]) !== 255)

    		// 判断有没有重复,以及有没有用光所有的字符串
    		// 这里的有没有用光是指,有的ip可能结果是xx.xx.010.xx
    		// 那么这里的010,会在下面被处理成10,到这里的结果就是xx.xx.10.xx
    		// 这里就没有用光所有的字符串,不符合条件,因为0被丢弃了
    		if(res.indexOf(oneip) < 0 && oneip.length === len+3)
    			res.push(oneip);
    	} else if(ip.length < 4) { // 继续拼
    		// 给每位安排字符串长度,每位的字符串长度最大为3
    		// 由于剩余的字符串长度可能不足3,所以这里取3和rem.length的最小值
    		var reslen = Math.min(3, rem.length)
    		// 循环拼接
    		for(let i = 1; i <= reslen; i++){
    			let cut = rem.substring(0, i)
    			// 每一位要小于255
    			if(parseInt(cut) <= 255) {
    				// 得到剩下的字符串
    				let newrem = rem.substring(i)
    				// 拼接成新的ip地址数组(防止递归了数组的指针,会相互影响)
	    			let newip = ip.concat([parseInt(cut)])
	    			remlength = 4 - newip.length;
	    			// 判断一下新得到的剩下的字符串的长度是否符合要求,符合要求才递归
	    			// 剩下的字符串长度,应不大于剩余未得到的IP地址的长度*3,不应小于剩余未得到的IP地址的长度*1
	    			if(newrem.length <= remlength*3 && newrem.length >= remlength)
	    				spellAddress(newip, newrem); // 递归
    			}
    		}
    	}
    	// 其他条件不用做处理(ip.length === 4) 且还有剩余字符串
    }

    spellAddress([], s)
    return res;
};