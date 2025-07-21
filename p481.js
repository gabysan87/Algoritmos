// Validar número par y positivo

// Si el número es par y positivo, muestra "Número válido"
// Si no, muestra "Número inválido"
const validarNumero = (num) => {
  return num % 2 === 0 && num > 0 ? "Número válido" : "Número inválido";
  // if (num % 2 === 0 && num > 0) {
  //   return "Número válido";
  // } else {
  //   return "Número inválido";
  // }
};
console.log(validarNumero(5));
console.log(validarNumero(4));
console.log(validarNumero(-4));
