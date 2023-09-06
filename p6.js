// Encontrar elementos comunes:

// Enunciado: Escribe una función que encuentre los elementos que son comunes en dos arreglos.
// Ejemplo de Entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo de Salida: [3, 4]

const findCommonElements = (arr1, arr2) => {

return arr1.filter((item) => arr2.includes(item));
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));




//   const elementosComunes = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       elementosComunes.push(arr1[i]);
//     }
//   }

//   return elementosComunes;