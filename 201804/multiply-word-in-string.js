// Title: Multiply Word in String
// Level: 7 kyu
// Date Completed: In Progress
// URL: https://www.codewars.com/kata/multiply-word-in-string/train/javascript
// Description: You are to write an function that takes a string as it's first paramter. This string will be a string of words. You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0. Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

function modifyMultiply (str,loc,num) {
  words = str.split(" ");
  return repeatedWords = words[loc].repeat(num);
}

console.log(modifyMultiply("This is a string",3 ,5));
