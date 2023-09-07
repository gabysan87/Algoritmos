// Ejercicio: Verificar si una cadena contiene las letras 'a' y 'b'
// Planteamiento: Escribe una función que tome como entrada una cadena y determine si contiene las letras 'a' y 'b'.
// Entrada: Una cadena, por ejemplo: "casa blanca"
// Salida: true si la cadena contiene las letras 'a' y 'b', false en caso contrario.


const stringLetter = (str) => {
 return str.includes("a") && str.includes("b")
}
console.log(stringLetter("casa blanca"))