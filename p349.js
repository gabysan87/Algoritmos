// Contar Palabras por Longitud:
// Se necesita un algoritmo que tome un array de palabras
// y devuelva un objeto con la cantidad de palabras que tienen cada longitud.
// Entrada:

const palabras = ['casa', 'perro', 'gato', 'bicicleta', 'sol', 'playa', 'computadora'];
// Salida:
// { '3': 1, '4': 2, '5': 2, '9': 1, '11': 1 }

const lengthWords = (arr) => {
    return arr.reduce((acc, curr) => {

        //obtener la longitud de cada palabra
        const word = curr.length
        console.log(word)

        //si la longitud ya esta en el objeto, incrementamos su valor
        if (acc[word]) {
            acc[word]++;
        }else {
        // si no esta, lo inicializamos con 1
        acc[word] = 1
        }
        return acc
    },{})
}  

console.log(lengthWords(palabras))
