// Title: Get the Middle Character
// Level: 7 kyu
// Date Completed: 4/23/18
// URL: https://www.codewars.com/kata/get-the-middle-character/train/javascript
// Description: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  return s.length % 2 == 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[s.length / 2 | 0]
}
