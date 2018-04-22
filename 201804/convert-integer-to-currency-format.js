// Title: Converting integer to currency format
// Level: 7 kyu
// Date Completed: 4/21/18
// URL: https://www.codewars.com/kata/converting-integer-to-currency-format/train/javascript
// Description: Write a function that takes an integer in input and outputs a string with currency format. Integer in currency format is expressed by a string of number where every three characters are separated by comma. For example: 123456 --> "123,456" Input will always be an positive integer, so don't worry about type checking or negative/float values.

function toCurrency(price){
  return price.toLocaleString()
}
