// Ejercicio: Verificar si un número es positivo o negativo, pero no cero
// Planteamiento: Escribe una función que tome como entrada un número y determine si es positivo o negativo, pero no cero.
// Entrada: Un número, por ejemplo: -5
// Salida: true si el número es positivo o negativo, pero no cero, false en caso contrario.


const positiveOrNegativeNumber = (number) => {
    return number > 0 || number < 0
}

console.log(positiveOrNegativeNumber(5))
console.log(positiveOrNegativeNumber(-5))
console.log(positiveOrNegativeNumber(0))

// Se valida con el nro 0 que sea diferente