// Title: Contamination #1 -String-
// Level: 8 kyu
// Date Completed: 4/24/18
// URL: https://www.codewars.com/kata/contamination-number-1-string/train/javascript
// Description: An AI has infected a text with a character!! This text is now fully mutated to this character. If the text or the character are empty, return an empty string. There will never be a case when both are empty as nothing is going on!! Note: The character is a string of length 1 or an empty string.

function contamination(text, char){
  return text.replace(text, char.repeat(text.length)).toString();
}
