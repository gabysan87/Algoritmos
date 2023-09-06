// Planteamiento: Determinar si un número es igual, mayor o menor que cero.
// Entrada: Un número entero.
// Salida: "Es igual a cero" si el número es cero, "Es mayor que cero" si es mayor que cero, o "Es menor que cero" si es menor que cero

const greaterThanOrEqualToZero = (number) => {

  // return number === 0 ? "Es igual a cero" : (number > 0 ? "Es mayor que cero" : "Es menor que cero");

  if (number === 0) {
    return "Es igual a cero";
  } else if (number > 0) {
    return "Es mayor que cero";
  } else {
    return "Es menor que cero";
  }
};

console.log(greaterThanOrEqualToZero(0));
console.log(greaterThanOrEqualToZero(5));
console.log(greaterThanOrEqualToZero(-1));
