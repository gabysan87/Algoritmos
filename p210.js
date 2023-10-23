// crear propiedades dle objeto, sino conozco las propiedades debo validar primero el valor que tiene la propiedad  
let myString = "programming";

["p", "r", "o", "g", "r", "a", "m", "m", "i", "n", "g"];

const countCharacters = (str) => {
  return str.split("").reduce((prev, current) => {
    console.log("Object", prev.hasOwnProperty(current));
    console.log("prev", !!prev[current]);
    prev.hasOwnProperty(current) ? prev[current]++ : (prev[current] = 1);
    return prev;
  }, {});
};
// iteracion 1 : { p: 1 }
// iteracion 2 : { p: 1, r: 1 }
// iteracion 3 : { p: 1, r: 1, o: 1 }
// iteracion 4 : { p: 1, r: 1, o: 1, g: 1 }
// iteracion 5 : { p: 1, r: 2, o: 1, g: 1 }
// iteracion 6 : { p: 1, r: 2, o: 1, g: 1, a: 1 }
// iteracion 7 : { p: 1, r: 2, o: 1, g: 1, a: 1, m: 1 }
// iteracion 8 : { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2 }
// iteracion 9 : { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2, i: 1 }
// iteracion10 : { p: 1, r: 2, o: 1, g: 1, a: 1, m: 2, i: 1, n: 1 }
// iteracion11 : { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }

console.log("");
console.log("");
console.log(countCharacters(myString));
console.log("");
console.log("");





// prev es el objeto completo