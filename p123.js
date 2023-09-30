// Obtener el enésimo número par
// Devuelve el enésimo número par

// Ejemplo ( Entrada --> Salida )

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// La entrada no será 0.

const nthEven = (n) => {
    // your code here
   return (n-1) * 2
  }

console.log(nthEven(1), "Wrong Value!");
console.log(nthEven(2), "Wrong Value!");
console.log(nthEven(3),"Wrong Value!");