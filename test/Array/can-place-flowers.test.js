import reverseWords from '../../code/Array/can-place-flowers.js'

test('[1,0,0,0,1]', () => {
  expect(reverseWords([1,0,0,0,1],1)).toBe(true)
})

test('[1,0,0,0,1]2', () => {
  expect(reverseWords([1,0,0,0,1],2)).toBe(false)
})

test('[0,0,1]', () => {
  expect(reverseWords([0,0,1],1)).toBe(true)
})

test('[0]', () => {
  expect(reverseWords([0],1)).toBe(true)
})

test('[0,0]', () => {
  expect(reverseWords([0,0],2)).toBe(false)
})

test('[0,0,0]', () => {
  expect(reverseWords([0,0,0],2)).toBe(true)
})

test('[0,0,0,0]', () => {
  expect(reverseWords([0,0,0,0],3)).toBe(false)
})