// Ejercicio: Verificar si un número está fuera del rango 10-20
// Planteamiento: Escribe una función que tome como entrada un número y determine si está fuera del rango 10-20 (excluyendo los límites).
// Entrada: Un número, por ejemplo: 8
// Salida: true si el número está fuera del rango 10-20, false en caso contrario.

const numberOutOfRange = (number) => {
//  return number < 10 || number > 20 
//  return number < 10 || number > 20 ? true : false;
if (number < 10 || number > 20 ){
    return true
}
else {
    return false
}
}

console.log(numberOutOfRange(8))
console.log(numberOutOfRange(13))
console.log(numberOutOfRange(21))
console.log(numberOutOfRange(17))