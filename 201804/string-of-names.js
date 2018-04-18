// Title: Format a string of names like 'Bart, Lisa & Maggie'.
// Level: 6 kyu
// Date Completed: 4/12/18
// URL: https://www.codewars.com/kata/53368a47e38700bd8300030d
// Description: Given an array containing hashes of names, return a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names){
  return names.map(function(x) {
    return x.name
    }
  ).join(", ").replace(/,(?!.*,)/gmi, " &");
}
