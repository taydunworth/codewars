// Title: Replace all dots
// Level: 8 kyu
// Date Completed: 4/20/18
// URL: https://www.codewars.com/kata/fixme-replace-all-dots/train/javascript
// Description: The code provided is supposed replace all the dots . in the specified String str with dashes - But it's not working properly. Fix the bug so we can all go home early. String str will never be null.

const replaceDots = function(str) {
  return str.replace(/\./g, "-")
}
