
const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// const search = students.find((student) =>  {
//     if (student.age === 20){
//         return 1
//     }
// })

const result = students.find((item) => item.name === "Ryan Jhon")
   
console.log(result)

// Find: encuentra el primer elemento que cumple con la condicion 