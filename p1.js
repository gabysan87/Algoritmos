// Suma de elementos en un arreglo:

// Enunciado: Escribe una función que sume todos los números en un arreglo.
// Ejemplo de Entrada: [1, 2, 3, 4, 5]
// Ejemplo de Salida: 15

const addNumbers = (num) => {
    return num.reduce(((acc, curr) => acc + curr))
}

console.log(addNumbers([1, 2, 3, 4, 5]))