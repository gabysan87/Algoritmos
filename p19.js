// Planteamiento: Determinar si un número es un múltiplo de 5 y de 3 al mismo tiempo.
// Entrada: Un número entero.
// Salida: "Es múltiplo de 5 y 3" si el número es divisible tanto por 5 como por 3, o "No es múltiplo de 5 y 3" si no lo es.

const multipleNumber = (number) => {
  // return number % 5 === 0 && number % 3 === 0 ? "Es múltiplo de 5 y 3" : "No es múltiplo de 5 y 3";
  if (number % 5 === 0 && number % 3 === 0) {
    return "Es múltiplo de 5 y 3";
  } else {
    return "No es múltiplo de 5 y 3";
  }
};

console.log(multipleNumber(6));
console.log(multipleNumber(15));
console.log(multipleNumber(25));


