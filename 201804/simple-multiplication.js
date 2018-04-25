// Title: Simple multiplication
// Level: 8 kyu
// Date Completed: 4/24/18
// URL: https://www.codewars.com/kata/simple-multiplication/train/javascript
// Description: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}
