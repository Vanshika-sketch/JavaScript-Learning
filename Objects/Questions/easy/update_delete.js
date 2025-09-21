let student = {
    name : "vanshika",
    age : 21,
    course : "bca",
    isEnrolled : true
}

// add properties
student.grade = 'A' // also student['grade] = 'A'
console.log(student)

// update property
student.age = 21


// // delete property
delete student.isEnrolled
console.log(student)