// Contar elementos pares e impares:

// Enunciado: Escribe una función que cuente la cantidad de números pares e impares en un arreglo de números enteros.
// Ejemplo de Entrada: [1, 2, 3, 4, 5]
// Ejemplo de Salida: Pares: 2, Impares: 3

const countItems = (number) => {

  let pares = number.filter((item) => item % 2 === 0)
  let impar = number.filter((num) => num % 2 !== 0)
  return `Pares: ${pares.length}, Impares: ${impar.length}`
};

console.log(countItems([1, 2, 3, 4, 5]));

//otra solucion
  // let pares = 0;
  // let impares = 0;

  // for (let i = 0; i < number.length; i++) {
  //   if (number[i] % 2 === 0) {
  //     pares++;
  //   } else {
  //     impares++;
  //   }
  // }

  // return { pares, impares };