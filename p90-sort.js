const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// const sortedStudents = students.sort((a,b) => {
//     if (a.age < b.age){
//         return 1
//     }
// else{
//     return -1
// }
// })
// console.log(sortedStudents)

// const sortedStudents = students.sort((a,b) => a.age < b.age ? 1 : -1)

const sortedStudents = students.sort((a,b) => a.age - b.age )

console.log(sortedStudents)


// sort, recibe dos objeto, el primero el de la lista luego el que le sigue, (primer elemento del arreglo luego el segundo )