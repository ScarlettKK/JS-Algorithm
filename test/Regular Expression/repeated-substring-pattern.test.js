import reverseWords from '../../code/Regular Expression/repeated-substring-pattern.js'

test('abab', () => {
  expect(reverseWords("abab")).toBe(true)
})

test('aba', () => {
  expect(reverseWords("aba")).toBe(false)
})

test('abcabcabcabc', () => {
  expect(reverseWords("abcabcabcabc")).toBe(true)
})

test('ababab', () => {
  expect(reverseWords("ababab")).toBe(true)
})
