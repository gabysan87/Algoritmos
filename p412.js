// Eliminar duplicados de un array
const array = [1, 2, 2, 3, 4, 4, 5];


const removeDuplicates = (arr) => {
return [...new Set(arr)]
}

console.log(removeDuplicates(array))

// Salida: [1, 2, 3, 4, 5]