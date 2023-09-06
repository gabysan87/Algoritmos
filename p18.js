// 8 Planteamiento: Verificar si una letra ingresada es una vocal o una consonante.
// Entrada: Un caracter (letra).
// Salida: "Es una vocal" si la letra es "a", "e", "i", "o" o "u", o "Es una consonante" si no lo es.

const isVowelORConsonant = (letter) => {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(letter)) {
    return "Es una vocal";
  } else {
    return "Es una consonante";
  }
};

console.log(isVowelORConsonant("a"));
console.log(isVowelORConsonant("b"));
