// Title: Next bigger number with the same digits
// Level: 4 kyu
// Date Completed: In Progress
// URL: https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript
// Description: You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits. If no bigger number can be composed using those digits, return -1:

function nextBigger(n){
  let arr = n.toString().split("") // creates string from number and splits it to an array
  let num = -1
  for (let i = arr.length-1; i >0; i--) { // sets up loop to look for the moment when the digit to the right if "i" is larger than "i"
    if (arr[i] > arr[i-1]) {
      num = i-1
      break // ends the loop once the digit is found
    }
  }
  if (num == -1) { // can't find the digits, so return the original number
    return num
  }
}

console.log(nextBigger(12));
