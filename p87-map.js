const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// const fullnames = students.map((student){
//     return student.name + " " + student.lastname;
// })
// console.log(fullnames)

// ejemplo arrow function
// const names = students.map((student) => student.name + " " + student.lastname)
// console.log(names)


// // agregando una nueva propiedad  
// const names = students.map((student) => {
// return {
//     fullnames: student.name + " " + student.lastname,
//     age: student.age,
//     course: student.course
// }
// })
// console.log(names)


// agregando un nuevo dato
// const names = students.map((student) => {
//     return {
//         name: student.name, 
//         lastname: student.lastname,
//         age: student.age,
//         course: student.course,
//         title: `${student.name} - ${student.course}`
//     }
// })
// console.log(names)


// agregando un nuevo dato con el spread operator
const newCourses = students.map((student) => {
    return {
        ...student,
        // copio el objeto 
        course: "Progamming"   
        // con esto reemplazo el valor 
    }
})
// const doubleAge = newCourses.map(student => student.age * 2)
// console.log(newCourses)
// console.log(doubleAge)


// usando el spread operator con la edad modificada
// const doubleAge = newCourses.map(student => ({
//     ...student, 
//     age: student.age * 2}))

// console.log(doubleAge)

// elimino el return y uso otro map dentro del mismo algoritmo
const doubleAge = students.map((student) => ({
        ...student,
        // copio el objeto 
        course: "Progamming"   
        // con esto reemplazo el valor 
    }))
    .map(student => ({...student, age: student.age * 2}))

console.log(doubleAge)
// metodo map: recorre el elemento retorna un arreglo nuevo, a diferencia del forEach no retorna debemos crear una nueva variable con el array vacio para que guarde el elemento 


// dado un array de numeros podemos obtener un nuevo array, con los dobles de cada numero invocando el metodo map sobre el array original, map recibe como primer parametro la funcion transformadora (la que se va a ir invocando por cada elemento del array ), como segundo parametro 

const number = [3, 10, 20, 50];
const double = number.map()