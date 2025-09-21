// object literal
// let obj = {
//     name : "xyz",
//     age : 23,
//     exam : "nimcet"
// }
// console.log(obj)

// object constructor

// let obj1 = new Object()
// obj1.name = "rew",
// obj1.age = 12,
// obj1.job = "dev"

// console.log(obj1)

// basic operations on js objecs

// accessing object properties
// console.log(obj.name) // using dot notation
// console.log(obj["age"]) // using bracket notation

//modifying object properties

// console.log(obj)

// obj.age = 52
// console.log(obj)

// let cars = {
//     model : "Tesla"
// }
// console.log("Original : ", cars)

// cars.color = "Black"

// console.log("After adding properties :",cars)

// Removing Properties from an object

let subjects = {
    maths : 45,
    science : 46,
    english : 40,
    hindi : 49
}
// console.log(subjects)
// delete subjects.science
// console.log(subjects)

// checking if property exist

// console.log("maths"in subjects)
// console.log(subjects)
// console.log(subjects.hasOwnProperty("maths"))
//The hasOwnProperty() method in JavaScript checks if an object has a specific property as its own (not inherited). 

// iterating through object properties
// for(let key in subjects){
//     console.log(key + ":" + subjects[key])
// }
// merging objects

// let obj1 ={name : "rov"}
// let obj2 = {age : 52}

// let obj3 = {...obj1,...obj2} // also spread syntax
// console.log(obj3)
// The Object.assign() method is used to copy the values and properties from one or more source objects to a target object. It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target

// // object length
// let obj = {name : "rov" , age : 23}
// console.log(Object.keys(obj).length)

