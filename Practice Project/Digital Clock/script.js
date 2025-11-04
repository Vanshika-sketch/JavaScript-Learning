// Select DOM elements
const timeSpan = document.getElementById("time");
const dateSpan = document.getElementById("date");


// Helper: add leading zero for single-digit numbers
function pad(number) {
  return number < 10 ? "0" + number : String(number);
}
