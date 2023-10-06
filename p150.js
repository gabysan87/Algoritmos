// Calcular el factorial de un número

// Planteamiento: Pide al usuario un número y calcula su factorial.
// Ejemplo de entrada: n = 5
// Salida esperada: El factorial de 5 es 120

const calculateFactorial = (n) => {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
};

console.log(calculateFactorial(5));

