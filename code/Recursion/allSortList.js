/*
输入一个单个字符数组
输出它们的全排列
*/
function allSort(arr, str, res) {
	if(arr.length === 1)
		res.push(str + arr[0])
	else {
		for(let i = 0 ; i < arr.length; i++){
			var a = [].concat(arr)
			var s = a.splice(i, 1);
			var st = str + s[0];
			allSort(a, st, res)
		}
		return res;
	}
}
console.log(allSort(['a','b','c'], '', []))