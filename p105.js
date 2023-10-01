// ¿Es n divisible por x e y?
// Crea una función que verifique si un número nes divisible por dos números x AND y . Todas las entradas son números positivos distintos de cero.

const isDivisible = (n, x, y) => {
  if (n % x === 0 && n % y === 0) return true;
  else {
    return false;
  }
  // return (n % x === 0 && n % y === 0) ? true : false;
};



console.log(isDivisible(3,3,4))
console.log(isDivisible(12,3,4))
console.log(isDivisible(8,3,4))
console.log(isDivisible(48,3,4))
