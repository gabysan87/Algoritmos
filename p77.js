// Combinar dos arrays:

// Enunciado: Escribe una función que combine dos arrays en uno solo.
// Ejemplo de entrada y salida:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinado = combinarArrays(array1, array2);
// console.log(combinado); // Salida: [1, 2, 3, 4, 5, 6]

const combineArrays = (array1, array2) => {
return array1.concat(array2)
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))