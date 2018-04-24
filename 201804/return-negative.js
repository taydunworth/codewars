// Title: Return Negative
// Level: 8 kyu
// Date Completed: 4/24/18
// URL: https://www.codewars.com/kata/return-negative/train/javascript
// Description: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative? The number can be negative already, in which case no change is required. Zero (0) can't be negative.

function makeNegative(num) {
   return -Math.abs(num)
}
