const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// const result = students.some((item) => {
//     if (item.lastname > "Doe"){
//         return true 
//     }
// })

const result = students.some((item) => {
      return item.lastname === "Doe"
})
    
    
console.log(result)

// some: solo retorna un valor booleano si al menos uno cumple con la condicion 