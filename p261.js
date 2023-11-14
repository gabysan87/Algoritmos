// ¿Es vocal en esta posición?
// Compruebe si es una vocal (a, e, i, o, u,) en la n posición en una cadena (el primer argumento). No te olvides de las mayúsculas.

// Algunos casos:

// {
// checkVowel('cat', 1)  ->   true // 'a' is a vowel
// checkVowel('cat', 0)  ->   false // 'c' is not a vowel
// checkVowel('cat', 4)  ->   false // this position doesn't exist
// }
// PD: si n <0, devuelve falso

const checkVowel = (string, position) => {
    const vowel = ["a","e","i","o","u"]
   return vowel.includes(string.toLowerCase()[position])

//    'aeiouAEIOU'.includes(s[p])
  };

console.log(checkVowel('cat', 1));
console.log(checkVowel('cat', 0));
console.log(checkVowel('cat', 4));
