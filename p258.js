// Fusionar dos matrices ordenadas en una
// Se le proporcionan dos matrices ordenadas que solo contienen números enteros. Tu tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden asc. Complete la función mergeArrays(arr1, arr2), donde arr1 y arr2 son las matrices ordenadas originales.

// No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más números enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelve una matriz vacía.

// Nota: arr1 y arr2 pueden ordenarse en diferentes órdenes. Además, arr1 y arr2 pueden tener los mismos números enteros. Elimine los duplicados en el resultado devuelto.

// Ejemplos (entrada -> salida)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// ¡Feliz codificación!

mergeArrays  = (arr1, arr2) => { 
    return [...new Set(arr1.concat(arr2))].sort((a,b) => a - b)

    // return [...new Set([...arr1, ...arr2])].sort((a,b)=> a-b)
 }

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]));
console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))
