// Reducir pero Crecer
// Dada una matriz de números enteros no vacía, devuelve el resultado de multiplicar los valores en orden. Ejemplo:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
  return x.reduce((acc, curr) => acc * curr);
}
console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
