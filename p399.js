// Algoritmo: Invertir las palabras de una frase

// Dado un string, invierte las palabras en la oración 
// sin cambiar el orden de las palabras.

let frase = "Hello world from JavaScript";

const invertWords = (str) => {
return str.split(" ").map((item) => item.split("").reverse().join("")).join(" ")
}
console.log(invertWords(frase))

// salida
// "olleH dlrow morf tpircSavaJ"