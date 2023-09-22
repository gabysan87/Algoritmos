const students = [
    {name: "Jill", lastname: "Doe", age: 25, course: "Marketing"},
    {name: "John", lastname: "Doe", age: 20, course: "Web Development"}, {name: "Jack", lastname: "Doe", age: 22, course: "Accounting"},
    {name: "Ryan Jhon", lastname: "Ray", age: 20, course: "Web Development"},
    {name: "Jane", lastname: "Doe", age: 21, course: "Financial Management"}
]

// const result = students.every((item) => item.age === 20)
// console.log(result)

const result = students.every((item) => item.name.includes("J"))
console.log(result)

// every: determina si todos los elementos en el array cumplen con la una condición