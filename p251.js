// Suma las cuerdas
// Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):

// Ejemplo: ( Entrada1, Entrada2 -->Salida )

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

const sumStr = (a, b) => {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2);
//   String(Number(a)+Number(b));
// return (+a+ +b)+''  
};
console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
