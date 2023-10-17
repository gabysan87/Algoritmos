// Crear una función que reciba un array de números cómo parámetros, multiplicar cada número del array por 2, hacerlo con un bucle for.

const primeNumber = (arr, num) => {
  let multiplique = [];
  for (let i = 0; i < arr.length; i++) {
    multiplique.push(arr[i] * num);
  }
  return multiplique;
};

console.log(primeNumber([1, 2, 3, 4, 5], 2));
