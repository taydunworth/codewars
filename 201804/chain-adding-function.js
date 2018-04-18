// Title: A Chain adding function
// Level: 5 kyu
// Date Completed: 4/11/18
// URL: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88
// Description: We want to create a function that will add numbers together when called in succession. We also want to be able to continue to add numbers to our chain. A single call should return the number passed in. We should be able to store the returned values and reuse them. We can assume any number being passed in will be valid whole number.

function add(x) {
  let y = function(x) {
    return add(x + y);
  };

  y.valueOf = y.toString = function() {
    return x;
  };

  return y;
}
