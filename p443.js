// Agregar el índice al valor de cada elemento
// Descripción:
// Suma el índice al valor de cada número en un array.
// Entrada  const numbers = [10, 20, 30, 40];



const sumIndex = (arr) => {
    return arr.map((num, index) => num + index)
}
console.log(sumIndex([10, 20, 30, 40]))

//Salida 
// [10 + 0, 20 + 1, 30 + 2, 40 + 3]
// [10, 21, 32, 43]

// Generar identificadores únicos
// Descripción:
// Genera identificadores únicos para cada elemento, combinando el índice con el elemento.


const names = ["Emma", "John", "Alice"];


const result = (array) => {
    return array.map((items, index) => `${items}_${index}`)
}

console.log(result(names))

//Salida
// ["Emma_0", "John_1", "Alice_2"]

// Etiquetar números como "par" o "impar"
// Descripción:
// Crea un array indicando si cada número es "par" o "impar" junto con su índice.
// entrada 
const numbers = [3, 8, 15, 24];

const numPairNot = (arr) => {
return arr.map((num, index) => {
    const number = num % 2 === 0 ? "par" : "impar"
    return `Indice ${index}: ${num} (${number})` 
}) 
}

console.log(numPairNot(numbers))

// Salida
// [
    //   "Índice 0: 3 (impar)",
    //   "Índice 1: 8 (par)",
    //   "Índice 2: 15 (impar)",
    //   "Índice 3: 24 (par)"
    // ]