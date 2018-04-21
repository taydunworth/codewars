// Title: Square Every Digit
// Level: 7 kyu
// Date Completed: 4/20/18
// URL: https://www.codewars.com/kata/square-every-digit/train/javascript
// Description: Welcome. In this kata, you are asked to square every digit of a number. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return parseInt(`${num}`.split("").map(y=>y*y).join(""))
}
