import reverseWords from '../../code/Array/x-of-a-kind-in-a-deck-of-cards.js'

test('[1,2,3,4,4,3,2,1]', () => {
  expect(reverseWords([1,2,3,4,4,3,2,1])).toBe(true)
})
test('[1,1,1,2,2,2,3,3]', () => {
  expect(reverseWords([1,1,1,2,2,2,3,3])).toBe(false)
})
test('[1]', () => {
  expect(reverseWords([1])).toBe(false)
})
test('[1,1]', () => {
  expect(reverseWords([1,1])).toBe(true)
})
test('[1,1,2,2,2,2]', () => {
  expect(reverseWords([1,1,2,2,2,2])).toBe(true)
})
test('[1,1,1,1,2,2,2,2,2,2]', () => {
  expect(reverseWords([1,1,1,1,2,2,2,2,2,2])).toBe(true)
})
