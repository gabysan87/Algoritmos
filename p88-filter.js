const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// Le pedimos una condición con el bucle for, creamos una const para guardar la informacion 

// const developers = []

// for (let i = 0; i < students.length; i++) {
//     if (students[i].course === "Web Development")
//     developers.push(students[i])
// }
// console.log(developers)


// const result = students.filter((student) => {
//     if (student.course === "Web Development"){
//         return true
//     }
// })
// console.log(result)


// en una linea de codigo
const result1 = students.filter((student) => student.age < 21)
console.log(result1)

// quiero un array llamado result que va a venir del recorrido de estudiante con filter, y le voy a decir por cada estudiante que empieces a recorrer voy a estar colocando una condicion, si el estudiante en la propiedad course es estrictamente igual a "Web Development entonces va a ser true 

// metodo filter devuelve lo que cumpla con la condicion