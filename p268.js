// ¿Es un número?

// Dada una cadena s, escriba un método (función) que devolverá verdadero si es un entero único válido o un número flotante o falso si no lo es.

// Ejemplos válidos, deberían devolver verdadero:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// debería devolver falso:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

const isDigit = (s) => {
  //your code
  return parseFloat(s) === Number(s);
  //  return s == parseFloat(s) ? true : false;
  //  return Number(s) === parseFloat(s)
};

console.log(isDigit("s2324"));
