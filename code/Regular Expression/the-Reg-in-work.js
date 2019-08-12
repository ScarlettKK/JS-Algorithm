// 将字符串以|或者;分开
string.split(/[|;]/)

// 将字符串以||分开
string.split(/\|{2}/)

// 将string内含有arr中任一字符串的部分,标记成为高亮
reg = new RegExp('(' + arr.join('|') + ')', 'g')
string = string.replace(reg, '<span style="color:red">$&</span>')
