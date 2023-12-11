// Ejercicio 1: Filtrar objetos
// Planteamiento: Crea una función que filtre objetos de un array según una condición dada.
//Entrada
const person = [
    {name: "Juan", age: 25},
    {name: "Maria", age: 30},
    {name: "Pedro", age: 22}
]

const result = (arr,age) => {
    return arr.filter((item) => item.age > age)
}

console.log(result(person,25))