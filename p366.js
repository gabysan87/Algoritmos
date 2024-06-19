// Planteamiento: Escribe una función que reciba un array de números y devuelva un objeto con la cantidad de ocurrencias de cada número.

// Entrada: [1, 2, 2, 3, 3, 3]
// Salida: {1: 1, 2: 2, 3: 3}

const number = [1, 1, 2, 2, 3, 3, 3, 3, 3, 1]

const arrayNumber = (arr) => {
    return arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1
    return acc
    },{})
    
}

console.log(arrayNumber(number))