// Total ASCII
// Se te dará una cadena y tendrás que devolver la suma de todos los caracteres como un int. La función debería poder manejar todos los caracteres ASCII imprimibles.

// Ejemplos:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

const uniTotal = (string) => {
    
  return string.split("").map((item) => item.charCodeAt()).reduce((acc,curr) => acc + curr,0)
//   return [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
};

console.log(uniTotal(""));
console.log(uniTotal("a"))
console.log(uniTotal("c"))
console.log(uniTotal("d"))
console.log(uniTotal("e"))
console.log(uniTotal("aaa"))
console.log(uniTotal("b"))
