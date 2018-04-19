// Title: Create Phone Number
// Level: 6 kyu
// Date Completed: 4/18/18
// URL: https://www.codewars.com/kata/create-phone-number/train/javascript
// Description: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. The returned format must be correct in order to complete this challenge. Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
  numbers.splice(0, 0, "(")
  numbers.splice(4, 0, ")")
  numbers.splice(5, 0, " ")
  numbers.splice(9, 0, "-")
  return numbers.join("")
}
