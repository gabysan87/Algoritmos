// Calcular el promedio:

// Enunciado: Escribe una función que calcule el promedio de los números en un arreglo.
// Ejemplo de Entrada: [10, 20, 30, 40, 50]
// Ejemplo de Salida: 30

const calculateAverage = (number) => {
    return number.reduce((acc,curr) => acc + curr) / number.length  
}

console.log(calculateAverage([10, 20, 30, 40, 50]))