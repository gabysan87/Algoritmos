// Planteamiento: Pide al usuario una cadena y devuelve la misma cadena invertida.
// Ejemplo de entrada: cadena = "hola"
// Salida esperada: aloh

const stringInvert = (str) => {
    return str.split("").reverse().join("")
}

console.log(stringInvert("hola"))