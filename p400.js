// Algoritmo: Eliminar elementos duplicados de un array
// Descripción:
// Dado un array, elimina los elementos duplicados y devuelve un array sin duplicados.

let array = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = (arr) => {
return [...new Set(arr)]
}

console.log(removeDuplicate(array))

//SALIDA 
// [1, 2, 3, 4, 5]