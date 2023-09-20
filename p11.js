// 1.- Planteamiento: Verificar si un número es positivo o negativo.
// Entrada: Un número entero.
// Salida: "Es positivo" si el número es mayor que cero, o "Es negativo" si el número es menor que cero.

const verifyNumber = (num) => {
  return num > 0 ? "Es positivo" : "Es negativo"
  // if (num > 0) {
  //   return "Es positivo";
  // } else {
  //   return "Es negativo";
  // }
};

console.log(verifyNumber(10));
console.log(verifyNumber(-3));
