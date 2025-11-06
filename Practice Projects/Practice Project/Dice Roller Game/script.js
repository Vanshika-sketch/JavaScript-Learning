// select DOM elements
const rollBtn = document.getElementById("rollBtn");
const resultSpan = document.getElementById("result");
const historyList = document.getElementById("history");

// basic runtime checks (helpful while developing)
if (!rollBtn || !resultSpan || !historyList) {
  console.error("One or more DOM elements not found:", { rollBtn, resultSpan, historyList });
}

// Function that returns a random integer between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// animate the result briefly using the CSS animation class
function animateResult() {
  if (!resultSpan) return;
  resultSpan.classList.add("shake");
  // remove class once animation finishes; { once: true } makes the listener auto-remove
  resultSpan.addEventListener(
    "animationend",
    () => {
      resultSpan.classList.remove("shake");
    },
    { once: true }
  );
}

// Roll the die and update UI
function rollDie() {
  const value = randomInt(1, 6);            // generate 1..6
  if (resultSpan) resultSpan.textContent = value; // show latest result

  // create a new list item for history
  const li = document.createElement("li");
  li.textContent = `You rolled: ${value}`; // set visible text

  // insert at top so newest appears first
  if (historyList) historyList.insertBefore(li, historyList.firstChild);

  // optional: keep history to last 10 entries
  if (historyList) {
    while (historyList.children.length > 10) {
      historyList.removeChild(historyList.lastChild);
    }
  }

  // animate the result bubble
  animateResult();
}

// run rollDie when the button is clicked
if (rollBtn) {
  rollBtn.addEventListener("click", rollDie);
}
