// Par o impar
// Cree una función que tome un número entero como argumento y devuelva números "Even" pares o "Odd" impares.

const evenOrOdd = (number) => {
  // return number % 2 === 0 ? 'Even' : 'Odd';
  if (number % 2 === 0) {
    return "Even";
  } else return "Odd";
};

console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
