// Ejercicio: Verificar si un número es divisible por 3 o 5
// Planteamiento: Escribe una función que tome como entrada un número y determine si es divisible por 3 o por 5.
// Entrada: Un número, por ejemplo: 15
// Salida: true si el número es divisible por 3 o por 5, false en caso contrario.

const divisibleNumber = (number) => {
    return number % 3 === 0 && number % 5 === 0 
}
console.log(divisibleNumber(15))
console.log(divisibleNumber(10))