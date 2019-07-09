import reverseWords from '../../code/Array/gray-code.js'

test('1', () => {
  expect(reverseWords(1)).toEqual([0,1])
})

test('2', () => {
  expect(reverseWords(2)).toEqual([0,1,3,2])
})
