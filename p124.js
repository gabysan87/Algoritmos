// Fusionar matrices de enteros ordenados (sin duplicados)

// Escribe una función que combine dos matrices ordenadas en una sola. Las matrices sólo contienen números enteros. Además, el resultado final debe estar ordenado y no tener duplicados.


const mergeArrays = (a, b) => {
    // your code here
    return [...new Set([...a, ...b])].sort((a,b) => a - b)
    // [...new Set(a.concat(b))].sort((a,b)=>a-b)
  }

console.log(mergeArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeArrays([2, 4, 8], [2, 4, 6]))