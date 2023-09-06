// Ejercicio: Verificar si un número es par y positivo
// Planteamiento: Escribe una función que tome como entrada un número y determine si es par y positivo.
// Entrada: Un número, por ejemplo: 6
// Salida: true si el número es par y positivo, false en caso contrario.

const evenAndPositiveNumber = (number) => {
    // return number % 2 === 0  && number > 0

if (number % 2 === 0 && number > 0){
    return true
}
else 
    return false
}

 console.log(evenAndPositiveNumber(6))
 console.log(evenAndPositiveNumber(7))
 console.log(evenAndPositiveNumber(-6))
