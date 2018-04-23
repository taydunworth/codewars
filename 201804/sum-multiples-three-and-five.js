// Title: Sum of all the multiples of 3 or 5
// Level: 7 kyu
// Date Completed: 4/23/18
// URL: https://www.codewars.com/kata/sum-of-all-the-multiples-of-3-or-5/train/javascript
// Description: Your task is to write function findSum. Up to and including n, this function will return the sum of all multiples of 3 and 5. For example: findSum(5) should return 8 (3 + 5);  findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  sum = 0;
  for (i = 0; i <= n; i++) {
    (i % 3 === 0 || i % 5 === 0) ? sum += i : sum;
  }
  return sum;
}
