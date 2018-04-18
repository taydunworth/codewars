// Title: Sum Strings as Numbers
// Level: 4 kyu
// Date Completed: 4/18/2018
// URL: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
// Description: Given the string representations of two integers, return the string representation of the sum of those integers. A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a,b) {
    function iterateAndAdd(a,z) {
      let dif = a.length-z.length
      let _a = a.split('')
      let _z = z.split('')
      let firstRealNumberFound = false
      for (let i=z.length-1; i>=0; i--) {
        let sum = (parseFloat(_z[i]) + parseFloat(_a[i+dif]))
        sum = sum.toString()
        _a.splice([i+dif], 1, sum.slice(sum.length-1))

        if (sum.length > 1) {
            _a.splice((i+dif-1<0 ? 0 : i+dif-1), (dif===0 && i===0 ? 0 : 1), ((parseFloat(_a[i+dif-1])+1) || 1).toString())
        }
      }
      return _a.map((value, i) => {
        if (firstRealNumberFound) {
          return value
        } else {
          if (parseInt(value) != 0) {
            firstRealNumberFound = true
            return value
          }
        }
      }).join('')
    }
    return a.length > b.length ? iterateAndAdd(a,b) : iterateAndAdd(b,a)
  }
