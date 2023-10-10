
// numeros primos
const getPrimeNumbers = (arr) =>
  arr.filter((item) => (item > 1 && item <= 3) || (item % 2 !== 0 && item % 3 !== 0));

console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9]));