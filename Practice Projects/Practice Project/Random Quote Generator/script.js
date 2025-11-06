// Step 1: Define an array of quotes
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" }
];
// Step 2: Select DOM elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");


// Step 3: Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
// Function to display quote with a short fade-out/fade-in effect
function displayQuote() {
  // add fade-out class to trigger CSS transition
  quoteElement.classList.add("fade-out");
  authorElement.classList.add("fade-out");

  // wait for the fade-out to be visible, then change text and remove the class
  // 220ms matches CSS transition (slightly shorter than 240ms used in CSS)
  setTimeout(() => {
    const { text, author } = getRandomQuote();
    quoteElement.textContent = `"${text}"`;
    authorElement.textContent = `— ${author}`;

    // remove fade-out so CSS transition will animate it back to visible
    quoteElement.classList.remove("fade-out");
    authorElement.classList.remove("fade-out");
  }, 220);
}

// Step 5: Add click event listener
newQuoteBtn.addEventListener("click", displayQuote);
