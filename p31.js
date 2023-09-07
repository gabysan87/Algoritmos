// Ejercicio: Verificar si un número es par y positivo
// Planteamiento: Escribe una función que tome como entrada un número y determine si es par y positivo.
// Entrada: Un número, por ejemplo: 6
// Salida: true si el número es par y positivo, false en caso contrario.

const numberEvenAndPositive = (num) => {
    return num % 2 === 0 && num > 0 ? true : false

    // if (num % 2 === 0 && num > 0){
    //     return true
    // }
    // else {
    //     return false
    // }

}

console.log(numberEvenAndPositive(6))
console.log(numberEvenAndPositive(5))
console.log(numberEvenAndPositive(-6))
