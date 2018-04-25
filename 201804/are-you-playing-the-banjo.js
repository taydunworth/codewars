// Title: Are You Playing Banjo?
// Level: 8 kyu
// Date Completed: 4/24/18
// URL: https://www.codewars.com/kata/are-you-playing-banjo/train/javascript
// Description: Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
  return name.toLowerCase().split("")[0]==="r" ? `${name} plays banjo` : `${name} does not play banjo`
}
