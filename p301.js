const arrayUser = [
    {name: "Persona1", age: 25, email: "persona1@gmail.com", id: 1},
    {name: "Persona2", age: 30, email: "persona2@gmail.com", id: 2},
    {name: "Persona3", age: 22, email: "persona3@gmail.com", id: 3},
    {name: "Persona4", age: 28, email: "persona4@gmail.com", id: 4},
]
const result = (arr, id) => {
    return arr.filter((person) => person.id === id)
}


console.log(result(arrayUser,4))