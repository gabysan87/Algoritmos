// Ejercicio: Verificar si un número está fuera del rango 10-20
// Planteamiento: Escribe una función que tome como entrada un número y determine si está fuera del rango 10-20 (excluyendo los límites).
// Entrada: Un número, por ejemplo: 8
// Salida: true si el número está fuera del rango 10-20, false en caso contrario.

const numberRanger = (num) => {

    if (num < 10 || num > 20){
        return true 
    }
    else {
        return false
    }

}
console.log(numberRanger(8))
console.log(numberRanger(18))