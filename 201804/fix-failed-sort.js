// Title: Failed Sort - Bug Fixing #4
// Level: 7 kyu
// Date Completed: 4/21/18
// URL: https://www.codewars.com/kata/failed-sort-bug-fixing-number-4/train/javascript
// Description: Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order

// Code Provided That Needs Fixed:
// var sortArray = function(value) {
//  return value.split('').sort((c, p) => c / p ).join('');
// }

let sortArray = function(value) {
  return value.split('').sort().join('');
}
