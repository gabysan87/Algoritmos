// Filtrar, mapear y reducir un array de números
// Este algoritmo filtra los números pares, los multiplica por 2, y luego suma todos los resultados.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const addAndMultiply = (arr) => {
    const numberFilter = arr.filter((item) => item % 2 ===  0)
    return numberFilter.map((num) => num * 2).reduce((acc, curr) => acc + curr,0)
}

console.log(addAndMultiply(numbers))

// Salida: 60