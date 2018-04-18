// Title: Moving Zeros To The End
// Level: 5 kyu
// Date Completed: 4/11/18
// URL: https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


var moveZeros = function (array) {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      array.push(array.splice(array.indexOf(array[i]), 1)[0]);
    }
  } return array
}
