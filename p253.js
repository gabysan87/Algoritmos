// ¡Cuenta los monos!
// Como buen padre, te sentarás y contarás con él. Dado el número (n), complete una matriz con todos los números hasta ese número inclusive, pero excluyendo el cero.

// Por ejemplo (Entrada --> Salida):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

const monkeyCount = (n) => {
  const number = [];
  for (let i = 1; i <= n; i++) {
    number.push(i);
  }
  return number;

//   return Array.from({ length: n }, (_, i) => i + 1);
};

console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(9));
