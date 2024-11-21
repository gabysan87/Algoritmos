//5- Sumar los Elementos de un Array:
// Enunciado:
// Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.

const sumNumb = (arr) => {
    return arr.reduce((acc, curr)=> acc + curr)
}
console.log(sumNumb( [1, 2, 3, 4]))


Entrada: [1, 2, 3, 4]
Salida: 10

//6-  Filtrar Elementos Pares en un Array:
// Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

const filterPair = (array) => {
    return array.filter((num) => num % 2 === 0)
}
console.log(filterPair( [1, 2, 3, 4, 5, 6]))
Entrada: [1, 2, 3, 4, 5, 6]
Salida: [2, 4, 6]