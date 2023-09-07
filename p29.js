// Ejercicio: Verificar si una cadena empieza con una vocal o termina con una consonante
// Planteamiento: Escribe una función que tome como entrada una cadena y determine si empieza con una vocal o termina con una consonante.
// Entrada: Una cadena, por ejemplo: "elefante"
// Salida: true si la cadena empieza con una vocal o termina con una consonante, false en caso contrario.

const vowelOrConsonant = (str) => {
 return [..."aeiou"].includes(str[0]) || [..."bcdfghjklmnpqrstvwxyz"].includes(str[str.length-1])

}
console.log(vowelOrConsonant("elefante"))
console.log(vowelOrConsonant("casa")) 
console.log(vowelOrConsonant("ola"))

