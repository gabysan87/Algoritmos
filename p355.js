// Contar Vocales por Palabra:
// Se requiere un algoritmo que tome un array de palabras
// y devuelva un objeto con la cantidad de vocales que tiene cada palabra.
// Entrada:
const palabras = [
    "casa",
    "perro",
    "gato",
    "bicicleta",
    "sol",
    "playa",
    "computadora",
    "anitalavalatina"
  ];

  const countVowels = (arr) => {

    return arr.reduce((acc, curr) => {
        const vowels = curr.match(/[aeiou]/gi)
        const result = vowels.reduce((acum, current) => {
           acum[current] = acum[current] + 1 || 1
        //    si queremos sumar elementos repetidos debemos usar esta sintaxis  + 1 || 1 
          return acum
        },{})
             acc[curr] = result
     return acc
    },{})
  }

  console.log(countVowels(palabras))

//   salida:
//   {
//     casa: { a: 2 },
//     perro: { e: 1, o: 1 },
//     gato: { a: 1, o: 1 },
//     bicicleta: { i: 2, e: 1, a: 1 },
//     sol: { o: 1 },
//     playa: { a: 2 },
//     computadora: { o: 2, u: 1, a: 2 },
//     anitalavalatina: { a: 6, i: 2 }
//   }