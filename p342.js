// Reemplazar elementos
// Enunciado: Crea una función que reemplace todos los elementos específicos de un array por otro elemento dado y devuelva el array resultante
// Entrada
const array = [1, 2, 3, 2, 4, 2];
const elementoARemplazar = 2;
const nuevoElemento = 0;

const replaceElements = (arr, num, elem) => {
  return arr.map((item) => (item === num ? elem : item));

  // return arr.toString().replace(/[2]/g,'0').split()
};

console.log(replaceElements(array, elementoARemplazar, nuevoElemento));
// Salida: [1, 0, 3, 0, 4, 0]

// Dividir un array en partes
// Enunciado: Escribe una función que divida un array en partes más pequeñas de un tamaño específico y devuelva un array de arrays con estas partes.
// Entrada
const array2 = [1, 2, 3, 4, 5, 6, 7];
const tamanoParte = 2;

const splitArray = (array, num) => {
  let result = [];
  for (let i = 0; i < array.length; i += num) {
    result.push(array.slice(i, i + num));
  }
  return result;
};

console.log(splitArray(array2, tamanoParte));
// Salida: [[1, 2, 3], [4, 5, 6], [7]]
