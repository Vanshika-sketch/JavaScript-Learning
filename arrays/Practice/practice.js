// let a = [] //creating an empty array
// console.log(a);

// // creating an array and initializing with values
// let b = [10,20,30]
// console.log(b)


// Array Constructor Method( using Array())

// let a = new Array(10,20,30)
// console.log(a)


//Basics Operations of an Array

// Accessing Elements of a Array

// let a = ["HTML" , "CSS" , "JS"]

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])

// ARRAY PROPERTIES

//length -> returns the number of elements also from these we can access the elements from array
// let numbers = [1,2,3,4,5]
// console.log(numbers.length)
// indexof -> finds index of elememt(return -1 if not found

// common array methods

// push() → add at end
// pop() → remove from end
// unshift() → add at beginning
// shift() → remove from beginning

// let arr =[1,2]

// arr.push(3)
// arr.pop()
// arr.unshift(0)
// arr.shift()
// console.log(arr)

// iterating loops
// for loop

// for( let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i])
// }

// filter questions
// Filter even numbers


// let numbers = [10,20,30,22,333,4]
// let even = numbers.filter(num => num % 2 === 0 )

// console.log(even)

// Filter words longer than 4 characters

// let words = ["hi" , "hello" , "code" , "html" , "css" , " nope"]
// let longwords = words.filter( word => word.length > 4)
// console.log(longwords)

// Filter unique values (with indexOf)
let arr = [1, 2, 2, 3, 4, 4, 5,4,6,4,7,9,90]
let unique =arr.filter((item ,index)=>arr.indexOf(item)=== index)
console.log(unique)