import reverseWords from '../../code/Array/gray-code.js'

test('1', () => {
  expect(reverseWords(1)).toEqual(['0','1'])
})

test('2', () => {
  expect(reverseWords(2)).toEqual(['00','01','11','10'])
})

test('3', () => {
  expect(reverseWords(3)).toEqual(['000','001','011','010','110','111','101','100'])
})