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
