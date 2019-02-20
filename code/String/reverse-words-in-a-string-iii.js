/**
 * @param {string} s
 * @return {string}
 * 题目：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/submissions/
 */
 var a = 1;
var reverseWords = function(s) {
    var arr = s.split(" ");

    var res = arr.map((item) => {
    	return item.split("").reverse().join("");
    })

    return res.join(" ")
};

// 关于export default 和 export 区别：https://www.jianshu.com/p/edaf43e9384f
// 写法上面的区别：export default可以先定义函数，后导出，而export只能在哪定义在哪导出
/*
 * 1.export
 * //a.js
 * export const str = "blablabla~";
 * export function log(sth) { 
 *   return sth;
 * }
 * 对应的导入方式：

 * //b.js
 * import { str, log } from 'a'; //也可以分开写两次，导入的时候带花括号

 * 2.export default
 * //a.js
 * const str = "blablabla~";
 * export default str;
 * 对应的导入方式：

 * //b.js
 * import str from 'a'; //导入的时候没有花括号
*/

// 使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
/*
 * //a.js
 * let sex = "boy";
 * export default sex（sex不能加大括号）
 * //原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
 * 其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。
 * // b.js
 * 本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
 * import any from "./a.js"
 * import any12 from "./a.js" 
 * console.log(any,any12)   // boy,boy
*/

//总结：
/*
 * 1.export与export default均可用于导出常量、函数、文件、模块等
 * 2.在一个文件或模块中，export、import可以有多个，export default仅有一个
 * 3.通过export方式导出，在导入时要加{ }，export default则不需要
 * 4.export default可以先定义函数，后导出，而export只能在哪定义在哪导出
 * 5. 
 *   (1) 输出单个值，使用export default
 *   (2) 输出多个值，使用export
 *   (3) export default与普通的export不要同时使用
*/

export default reverseWords;




