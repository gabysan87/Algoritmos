// 7 Planteamiento: Determinar si un número es mayor que otro.
// Entrada: Dos números enteros.
// Salida: "El primer número es mayor" si el primer número es mayor que el segundo, o "El segundo número es mayor" si es menor.

const numberIsGreaterThanOther = (num1, num2) => {
  // return num1 > num2 ? "El primer número es mayor" : "El segundo número es mayor"
  
  if (num1 > num2) {
    return "El primer número es mayor";
  } else {
    return "El segundo número es mayor";
  }
};
console.log(numberIsGreaterThanOther(4, 7));
console.log(numberIsGreaterThanOther(6, 3));
