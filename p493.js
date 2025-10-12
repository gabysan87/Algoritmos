// Ejercicio: Contar la frecuencia de elementos
// Enunciado

// Dado un array de palabras, crea una estructura que indique cuántas veces aparece cada palabra.

// Ejemplos
// Entrada: ["manzana", "pera", "manzana", "uva", "pera", "manzana"]
// Salida esperada: { manzana: 3, pera: 2, uva: 1 }

// Requisitos

// Usa objetos literales o un Map.

// Intenta dos soluciones distintas:

// Con reduce().

// Con un bucle for...of y Map.

const fruit = ["manzana", "pera", "manzana", "uva", "pera", "manzana"];

const countWords = (arraywords) => {
  return arraywords.reduce((acc, curr) => {
    // acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};
console.log(countWords(fruit));

// Diseña un algoritmo que determine si una palabra es un palíndromo, es decir, una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
// Entrada: "reconocer"
// Salida:

// Un mensaje indicando si la palabra es palíndromo o no lo es.

// "Es palíndromo"

const isPalindrome = (word) => {
  return word === word.split("").reverse().join("")
    ? "Es palíndromo"
    : "No es palíndromo";
};
console.log(isPalindrome("reconocer"));
