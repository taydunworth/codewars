// Title: One Line: Square Every Digit
// Level: 6 kyu
// Date Completed: In Progress
// URL: https://www.codewars.com/kata/one-line-task-square-every-digit/train/javascript
// Description: Inspired by Square Every Digit (and by the inimitable myjinxin2015's many clever one-line kata), your goal here is precisely the same (to square every digit in the given number), in 36 or fewer characters (JavaScript), or 48 or fewer in Ruby.

sd=x=>+Array.from(''+x,y=>y*y).join("")
