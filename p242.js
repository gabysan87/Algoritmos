// Dada una serie de números, verifique si alguno de los números es el código de caracteres para vocales minúsculas ( a, e, i, o, u).

// Si es así, cambie el valor de la matriz a una cadena de esa vocal.

// Devuelve la matriz resultante.
// entrada: [101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]
// salida: [
//   'e', 121, 110, 113,
//   113, 103, 121, 121,
//   'e', 107, 103
// ]

const serieNumber = (arr) => {
const result = ['a', 'e', 'i', 'o', 'u'];
return arr.map((item) =>  result.includes(String.fromCharCode(item)) ? String.fromCharCode(item) : item)

// const isVow = arr => arr.map((item) => 'aeiou'.includes(vowel=String.fromCharCode(item)) ? vowel : item)
}

console.log(serieNumber([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]))