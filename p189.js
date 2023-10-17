// 6.- Suma de elementos de un arreglo: Dado un arreglo de números, escribe un programa que calcule la suma de todos los elementos utilizando un bucle for.

const sumNumber = (num) => {
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma = suma + num[i];
    // con suma renombro la variable
  }
  return suma;
};

console.log(sumNumber([1, 2, 3, 4, 5]));
