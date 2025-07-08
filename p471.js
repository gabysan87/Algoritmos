//  Ejercicio 1: Sumar todos los elementos
// Enunciado: Dado un array de números, suma todos sus elementos.

// Entrada:
const numeros = [1, 2, 3, 4, 5];

// Salida esperada:
15;

const compareNumber = (array) => {
  return array.reduce((acc, curr) => acc + curr);
};

console.log(compareNumber(numeros));

// Ejercicio 2: Obtener el número más grande
// Enunciado: Encuentra el valor más alto en un array de números.

// Entrada:
const number = [3, 7, 2, 9, 4];

// Salida esperada:
9;
