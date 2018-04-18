// Title: CamelCase Method
// Level: 6 kyu
// Date Completed: 4/12/18
// URL: https://www.codewars.com/kata/587731fda577b3d1b0001196
// Description: Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase=function() {
 if (this.length) {
  return(
   this.toLowerCase().split(' ').map(string => {
    return string ? `${string.charAt(0).toUpperCase()}${string.slice(1)}` : ''})
   .join('')
  )
 } else return ''
}
