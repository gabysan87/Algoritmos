// Ejercicio: Verificar si una cadena es igual a 'hola' o 'adios'
// Planteamiento: Escribe una función que tome como entrada una cadena y determine si es igual a 'hola' o 'adios'.
// Entrada: Una cadena, por ejemplo: "adios"
// Salida: true si la cadena es igual a 'hola' o 'adios', false en caso contrario.

const stringEgual = (str) => {
    return str === 'hola' || str === 'adios'
}
console.log(stringEgual("adios"))