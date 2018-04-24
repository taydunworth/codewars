// Title: Stop gninnipS My sdroW!
// Level: 6 kyu
// Date Completed: In Progress
// URL: https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript
// Description: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(str){
  return str = str.split(" ").map(function (word) {
    return (word.length > 4) ? word.split("").reverse().join("") : word
  }).join(" ")
}
