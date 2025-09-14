// ***************************************STACK AND HEAP*************

// let myyoutubename = "viradotcom"

// let anothername = myyoutubename

// anothername =  "cooffee"

// console.log(myyoutubename)
// console.log(anothername)

// let userone = {
//     email : "user@gmail.com",
//     upi : "user@ybl"
// }

// let userTwo = userone


let a = 10
let b = a     // copies the value 10 (not refrence)
b=20  // changing b does not affect a

console.log(a)
console.log(b)

let obj1 = {name : "vanshiak"};
let obj2 = obj1

obj2.name = "sharma"

console.log(obj1.name)
console.log(obj2.name)

//  obj1 points to an object in heap
// obj2 = obj1 -> both points to the same memory refrence in heap
// changing obj2 also changes obj1