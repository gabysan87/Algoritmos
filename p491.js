// 6- Crea una función tipoTriangulo(a, b, c) que:
// Verifique si los lados forman un triángulo válido (la suma de dos lados siempre mayor que el tercero).
// Si es válido:
// Devuelva "Equilátero" si los tres lados son iguales.
// Devuelva "Isósceles" si solo dos lados son iguales.
// Devuelva "Escaleno" si todos son diferentes.
// Si no es válido, devuelve "No es un triángulo".

const triangleType = (a, b, c) => {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "No es un triangulo";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else if (a === b || a === c || b === c) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
};
console.log(triangleType(5, 5, 5));
console.log(triangleType(5, 5, 3));
console.log(triangleType(4, 5, 6));
console.log(triangleType(1, 2, 5));
