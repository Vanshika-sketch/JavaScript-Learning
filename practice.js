// // 1. Declare variables
// let name = "Vanshika";
// let age = 20;
// let city = "Jaipur";
// console.log(name, age, city); 

// // 2. let → reassigning
// let course = "JavaScript";
// course = "C++"; 
// console.log(course);

// // 3. const → reassigning
// const country = "India";


// // 4. Swap with temporary variable
// let a = 5, b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b); 

// // 5. Swap without temporary variable
// let x = 7, y = 3;
// x = x + y; 
// y = x - y; 
// x = x - y; 
// console.log(x, y); 

// // data types
// let str = "Hello";
// let num = 42;
// let bool = true;
// let empty = null;
// let notDefined;
// console.log(typeof str); 
// console.log(typeof num); 
// console.log(typeof bool); 
// console.log(typeof empty); 
// console.log(typeof notDefined); 

// // BigInt
// let big1 = 12345678901234567890n;
// let big2 = 100n;
// console.log(big1 + big2); 

// // 3. Why typeof null is "object"?
// // → It's a bug in JS since 1995 (null was stored as a special object reference)

// // 4. == vs ===
// console.log(5 == "5");  
// console.log(5 === "5"); 

// Calculator
// let a = 10, b = 5;
// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2

// // Even/Odd
// let n = 7;
// console.log(n % 2 === 0 ? "Even" : "Odd");


// // Grade system
// let marks = 75;
// if (marks >= 80) console.log("A");
// else if (marks >= 60) console.log("B");
// else if (marks >= 40) console.log("C");
// else console.log("F");

// // Positive/Negative/Zero
// let num = -5;
// if (num > 0) console.log("Positive");
// else if (num < 0) console.log("Negative");
// else console.log("Zero");



// // Traffic light
// let light = "green";
// switch (light) {
//   case "red": console.log("Stop"); break;
//   case "yellow": console.log("Wait"); break;
//   case "green": console.log("Go"); break;
//   default: console.log("Invalid color");
// }

// // Leap year
// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
//   console.log("Leap year");
// else
//   console.log("Not a leap year");




// // 1–20
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// // Multiplication table of 7
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} = ${7 * i}`);
// }



// // Factorial
// let num = 5, fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact); // 120

// // Fibonacci
// let n1 = 0, n2 = 1;
// console.log(n1, n2);
// for (let i = 3; i <= 10; i++) {
//   let next = n1 + n2;
//   console.log(next);
//   n1 = n2;
//   n2 = next;
// }



// // Reverse number
// let num = 123, rev = 0;
// while (num > 0) {
//   let digit = num % 10;
//   rev = rev * 10 + digit;
//   num = Math.floor(num / 10);
// }
// console.log(rev); 


function square(n) {
  return n * n;
}
console.log(square(4));

function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(7)); 


// Max of 3
function max(a, b, c) {
  return (a > b && a > c) ? a : (b > c ? b : c);
}
console.log(max(5, 9, 2)); 

// Arrow function sum of array
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum)
