// ¿Es un número?
// Dada una cadena s, escriba un método (función) que devolverá verdadero si es un entero único válido o un número flotante o falso si no lo es.

// Ejemplos válidos, deberían devolver verdadero:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")

const isDigit = (s) => {
  return parseFloat(s) === Number(s);
};

console.log(isDigit("-234.4"));
console.log(isDigit("s2324"));

//parseFloat(s): La función parseFloat intenta analizar una cadena de texto s y convertirla en un número decimal de punto flotante (número con decimales). Si la cadena se puede analizar correctamente como un número, se devuelve ese número, de lo contrario, se devuelve NaN (Not-a-Number) si la cadena no es un número válido.

// Number(s): La función Number intenta convertir la cadena de texto s en un valor numérico. Al igual que parseFloat, si la cadena se puede convertir en un número, se devuelve ese número, y si no es válido, se devuelve NaN.

// La función isDigit compara el resultado de parseFloat(s) y Number(s) utilizando el operador de igualdad (===). Si los dos resultados son iguales, significa que la cadena s representa un número válido (incluyendo números enteros y números con decimales), y la función devuelve true. Si los resultados no son iguales (lo que generalmente significa que s no es un número o es un número no válido), la función devuelve false.

// En resumen, la función isDigit verifica si una cadena de texto representa un número válido y devuelve true si es así, y false si no. Puedes usar esta función para verificar si una cadena contiene un número antes de realizar operaciones matemáticas con ella o para validar la entrada de datos en tu programa.