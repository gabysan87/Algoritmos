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

// +

const countWords = (arraywords) => {
  return arraywords.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    // acc[curr] = (acc[curr] || 0) + 1
    return acc;
  }, {});
};
console.log(
  countWords(["manzana", "pera", "manzana", "uva", "pera", "manzana"])
);
// console.log(countWords(fruit));

// Diseña un algoritmo que determine si una palabra es un palíndromo, es decir, una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
// Entrada: "reconocer"
// Salida:

// Un mensaje indicando si la palabra es palíndromo o no lo es.

// "Es palíndromo"

const isPalindrome = (word) => {
  return word.split("").reverse().join("") === word
    ? "Es palíndromo"
    : "No es palíndromo";
};
console.log(isPalindrome("reconocer"));
console.log(isPalindrome("oso"));

//Sumar todos los números de un arreglo

// const number = [1, 2, 3, 4, 5];

// salida : 15

const sumArray = (array) => {
  return array.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumArray([1, 2, 3, 4, 5]));
