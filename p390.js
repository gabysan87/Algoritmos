// Problema: Dado un array de frases, cuenta cuántas veces aparece cada palabra en todas las frases.

let frases = [
  "El sol brilla",
  "La luna brilla",
  "El sol es brillante"
];

const countWords = (arr) => {
    // Usamos reduce para iterar sobre todas las frases y obtener el objeto de conteo
return arr.reduce((acc, curr) => {
// Convertimos la frase a minúsculas y la dividimos en palabras
let result = curr.toLowerCase().split(" ")
console.log(result)

//iteramos sobre cada palabra de de la frase 
result.forEach(element => {
  //si la palabra ya está en el objeto contador, la incrementamos
  if (acc[element]) {
    acc[element]++;
  } else {
    //si no esta, la inicializaos con 1
    acc[element] = 1
  } 
  // acc[element] = acc[element] ? acc[element] +1 : 1
});

//devolvemos el contador actualizado
return acc
},{}); //el segundo parametro de reduce es el objeto inicial, un objeto vacio 
}

console.log(countWords(frases))

// Salida :{
//     "El": 2,
//     "sol": 2,
//     "brilla": 2,
//     "La": 1,
//     "luna": 1,
//     "es": 1,
//     "brillante": 1
//   }