// ¿Es parejo?
// En este Kata pasamos un número (n) a una función.
// Su código determinará si el número pasado es par (o no).
// La función debe devolver verdadero o falso.
// Los números pueden ser positivos o negativos, enteros o flotantes.
// Los flotadores con parte decimal distinta de cero se consideran NO pares para este kata.

const testEven = (n) => {
    return n % 2 === 0
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false
//   }
}

console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));
