string.split(/[|;]/)

string.split(/\|{2}/)

reg = new RegExp('(' + content.amount.join('|') + ')', 'g')
content.content = content.content.replace(reg, '<span class="amount">$&</span>')
