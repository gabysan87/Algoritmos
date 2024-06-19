// Un isograma es una palabra que no tiene letras repetidas. Consideraciones Adicionales:

//     Un string vacío es un isograma.
//     La función tiene que ser case insensitive e ignorar acentos.
//     Si el string tiene mas de una palabra retornar false.
//     Se tiene que hacer clean up del string antes de comparar.
// Ejemplos:

// func("Murciélago"); // returns true
// func("reto"); // returns false
// func("Casa"); // returns false
// func("PeRrO"); // returns false
// func("GaTo"); // returns true

const valueIsogram = (str) => {
    const lower = str.toLowerCase();
    const result = lower.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    console.log(result)
    return  new Set(result).size===str.length
}

console.log(valueIsogram("Murciélago"))
console.log(valueIsogram(("reto")))
console.log(valueIsogram(("Casa")))