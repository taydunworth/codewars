// Title: Sum Strings as Numbers
// Level: 4 kyu
// URL: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
function sumStrings(a,b) {
  if (a === "") {
    a = 0;
    let sum = a + parseInt(b)
    sum = sum.toString();
    return sum;
  } else if (b === "") {
      b = 0;
      let sum = parseInt(a) + b
      sum = sum.toString();
      return sum;
  }
  let sum = parseInt(a) + parseInt(b)
  sum = sum.toString();
  return sum;
}

console.log(sumStrings("712569312664357328695151392", "8100824045303269669937"));
