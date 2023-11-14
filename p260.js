// Escriba una función llamada "filterEvenLengthWords".

// Dada una matriz de cadenas, "filterEvenLengthWords" devuelve una matriz que contiene solo los elementos de la matriz dada cuya longitud es un número par.

// var salida = filterEvenLengthWords(['palabra', 'palabras', 'palabra', 'palabras']);

// console.log(salida); // --> ['palabra', 'palabra']

const filterEvenLengthWords = (words) => {
    return words.filter((item) => item.length % 2 === 0)
    
}

console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']))
console.log(filterEvenLengthWords(['palabra', 'palabras', 'palabra', 'palabras']))
console.log(filterEvenLengthWords(['Hello', 'World']))