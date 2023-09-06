// Planteamiento: Determinar si un número es divisible por otro.
// Entrada: Dos números enteros.
// Salida: "Es divisible" si el primer número es divisible por el segundo, o "No es divisible" si no lo es.

const numberDivisibleByAnother = (num1, num2) => {
  // return  num1 % num2 === 0 ? "Es divisible" : "No es divisible"
  if (num1 % num2 === 0) return "Es divisible";
  else {
    return "No es divisible";
  }
};

console.log(numberDivisibleByAnother(3, 4));
console.log(numberDivisibleByAnother(7, 3));
console.log(numberDivisibleByAnother(10, 2));

// Se utiliza el operador de módulo (%), que te permite calcular el residuo de la división entre dos números.