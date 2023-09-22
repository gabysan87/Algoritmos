

const students = [
    {name: "Jill", lastname: "Doe", age: 24, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 22, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 20, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 23, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 20, course: "Financial Management"}
]

// for (let i = 0; i < students.length; i++){
//     console.log(students[i])
// }

// students.forEach(function(student, index, students) {
// console.log(student) unico objeto
// console.log(index) indice 
// console.log(students)
// })

const fullnames = []

students.forEach ((student) => {
    fullnames.push(student.name + " " + student.lastname)})

console.log(fullnames)

// el metodo forEach no retorna nada nuevo, eso quiere decir que cuando termine de recorrer debemos manipular los datos dentro de la funcion, para eso tendria que crear un crear un nuevo array, se crea vacio y por cada recorrido lo que haria es guardar un dato dentro del arreglo, usamos un metodo push en cada iteracion lo cual va hacer que nos va a colocar los datos dentro del array 