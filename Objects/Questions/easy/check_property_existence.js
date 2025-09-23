let student = {name : 'vanshika' , age : 21}

// using 'in' (checks own + inherited peoperties)

// console.log('name' in student)
// console.log('toString' in student)  /*student does not have toString as its own property.BUT — every object in JS inherits from Object.prototype by default, and Object.prototype has a method called toString().*/

// using hasOwnProperty(checks own properties only)
// console.log(student.hasOwnProperty('age'))
// console.log(student.hasOwnProperty('toString'))

/*hasOwnProperty checks only the object’s own properties (not the prototype chain). toString is inherited from Object.prototype, not directly defined in student.
Since hasOwnProperty ignores inherited ones, it returns false.*/


//utility finction (safe check)
function hasProp(obj,prop){
    return Object.prototype.hasOwnProperty.call(obj,prop)
}