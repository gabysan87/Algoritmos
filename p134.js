// Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):

// Ejemplo: ( Entrada1, Entrada2 -->Salida )

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

const sumStr = (a, b) => {
  const result1 = Number(a);
  const result2 = Number(b);

  return String(result1 + result2);

//   return String(Number(a)+Number(b));
};

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
