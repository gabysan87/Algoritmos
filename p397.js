// Problema: Contar cuántas veces aparece cada palabra en un texto
let text = "hola mundo hola a todos en este mundo hola";

const countHowManyTimes = (str) => {
    const letter = str.split(" ")
    return letter.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1
        return acc
    },{})
}

console.log(countHowManyTimes(text))

//  salida
// { hola: 3, mundo: 2, a: 1, todos: 1, en: 1, este: 1 }