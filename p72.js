// Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.

const sumNumber = (num) => {
    return num.reduce((acc, curr) => acc + curr )
}



console.log(sumNumber([1, 2, 3, 4, 5])); // Salida: 15