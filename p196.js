// Suma las cuerdas
// Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):
// Ejemplo: ( Entrada1, Entrada2 -->Salida )
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notas:

// Si alguna de las entradas es una cadena vacía, considérela como cero.
// Las entradas y la salida esperada nunca excederán el límite de enteros de 32 bits con signo ( 2^31 - 1)

const sumStr = (a, b) => {
  return String(Number(a) + Number(b));
//   const num1 = Number(a);
//   const num2 = Number(b);
//   return String(num1 + num2)

};
console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
