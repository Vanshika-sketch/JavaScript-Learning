// Select DOM elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");
const clearBtn = document.getElementById("clearBtn");
const resultSpan = document.getElementById("result");


// Helper: read inputs and convert to numbers
function readInputs() {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  return { a, b };
}


// Operation functions
function add() {
  const { a, b } = readInputs();
  resultSpan.textContent = a + b;
}

function subtract() {
  const { a, b } = readInputs();
  resultSpan.textContent = a - b;
}

function multiply() {
  const { a, b } = readInputs();
  resultSpan.textContent = a * b;
}

function divide() {
  const { a, b } = readInputs();
  if (b === 0) {
    resultSpan.textContent = "Error: divide by 0";
    return;
  }
  resultSpan.textContent = a / b;
}

function clearAll() {
  num1Input.value = "";
  num2Input.value = "";
  resultSpan.textContent = "--";
}

// Wire buttons to functions
addBtn.addEventListener("click", add);
subBtn.addEventListener("click", subtract);
mulBtn.addEventListener("click", multiply);
divBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clearAll);

