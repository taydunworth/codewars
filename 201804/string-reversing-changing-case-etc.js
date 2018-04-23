// Title: String Reversing, Changing Case, etc.
// Level: 7 kyu
// Date Completed: 4/23/18
// URL: https://www.codewars.com/kata/string-reversing-changing-case-etc/train/javascript
// Description: Given 2 string parameters, show a concatenation of: the reverse of the 2nd string with inverted case; e.g Fish -> HSIf; a separator in between both strings: @@@; the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER

function reverseAndMirror(s1,s2) {
  reverseOne = s1.split("").reverse().join("") + s1
  reverseTwo = s2.split("").reverse().join("");
  reverseCombo = `${reverseTwo}@@@${reverseOne}`
  function convertString(str) {
    s = "";
    i = 0;
    while (i < str.length) {
      n = str.charAt(i);
      (n == n.toUpperCase()) ? n = n.toLowerCase() : n = n.toUpperCase();
      i += 1;
      s += n;
    }Heads
    return s;
  } return convertString(reverseCombo);
}
