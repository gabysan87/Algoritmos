// Eliminar Duplicados en un Arreglo:

// Planteamiento: Escribe una función que elimine los elementos duplicados de un arreglo y devuelva un nuevo arreglo con valores únicos.

// Ejemplo:

// Entrada: [1, 2, 2, 3, 4, 4, 5]
// Salida: [1, 2, 3, 4, 5]


// const numDuplicate = (arr) => {
// return [...new Set(arr)]
// }
// console.log(numDuplicate([1, 2, 2, 3, 4, 4, 5]))

const removeDuplicates = [1, 2, 2, 3, 4, 4, 5] 
const result = (arr) => {
    return [...new Set(arr)]
}

console.log(result(removeDuplicates))

