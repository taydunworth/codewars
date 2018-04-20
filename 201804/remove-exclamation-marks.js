// Title: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
// Level: 8 kyu
// Date Completed: 4/20/18
// URL: https://www.codewars.com/kata/exclamation-marks-series-number-4-remove-all-exclamation-marks-from-sentence-but-ensure-a-exclamation-mark-at-the-end-of-string/train/javascript/5972855138b1e37afb00008f
// Description: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

function remove(s){
  return s.replace(/!/g, "") + "!"
}
