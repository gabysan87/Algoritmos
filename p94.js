// Combinando metodos
// Se pide convertir el nombre y apellido en una solo propiedad, ademas devolver la edad

const students = [
    {name: "Jill", lastname: "Doe", age: 24, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 22, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 20, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 23, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 20, course: "Financial Management"}
]

// const result = students.map((student) => ({
// student: `${student.name} ${student.lastname}`,
// age: student.age 
// }))

const result = students.map(({name,lastname, age}) => ({
    student: `${name} ${lastname}`,
    age
    })).filter(student => student.age > 20)
    .sort((a,b) => a.age - b.age)
    .reduce((acc, curr) => acc + curr.age,0 )

console.log(result)