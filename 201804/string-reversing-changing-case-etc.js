// Title: String Reversing, Changing Case, etc.
// Level: 7 kyu
// Date Completed: In Progress
// URL: https://www.codewars.com/kata/string-reversing-changing-case-etc/train/javascript
// Description: Given 2 string parameters, show a concatenation of: the reverse of the 2nd string with inverted case; e.g Fish -> HSIf; a separator in between both strings: @@@; the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

function reverseAndMirror(s1,s2) {
  reversedS2 = s2.split("").reverse().join("");
  reversedS1 = s1.split("").reverse().join("") + s1
  return `${reversedS2}@@@${reversedS1}`
}

console.log(reverseAndMirror("FiZZ","buZZ"));
