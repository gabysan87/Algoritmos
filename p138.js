// Escribe una función que combine dos matrices ordenadas en una sola. Las matrices sólo contienen números enteros. Además, el resultado final debe estar ordenado y no tener duplicados.

const combineTwoArrays = (arr1, arr2) =>  [...new Set([...arr1, ...arr2])].sort((a,b) => a - b)

console.log(combineTwoArrays([1, 3, 5], [2, 4, 6]))
console.log(combineTwoArrays([2, 4, 8], [2, 4, 6]))