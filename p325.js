/*1 Mayúsculas y minúsculas
Planteamiento:
Crear una función que tome una cadena como entrada y devuelva una nueva cadena con todas las letras en mayúsculas y todas las letras en minúsculas.
Entrada:
mayusculasMinusculas("JavaScript");
Salida Esperada:
Mayúsculas: JAVASCRIPT
Minúsculas: javascript*/

const uppercaseLowercase = (string) => {
  const upercase = string.toUpperCase();
  const lowerCase = string.toLowerCase();
  return `Mayúsculas: ${upercase} ,
    Minúsculas: ${lowerCase}`;
};

console.log(uppercaseLowercase("JavaScript"));

/* 2 Contar vocales
Planteamiento:
Crear una función que tome una cadena como entrada y devuelva el número de vocales en esa cadena.
Entrada:
contarVocales("Programación");
Salida Esperada:
4*/

const countVowels = (str) => {
  return str.match(/[aeiouAEIOU]/g).length;
};
console.log(countVowels("Programación"));

// 3 Eliminar espacios en blanco
// Planteamiento:
// Crear una función que tome una cadena como entrada y devuelva una nueva cadena sin espacios en blanco.
// Entrada:
// eliminarEspacios("Hola mundo feliz");
// Salida Esperada:
// Holamundofeliz*/

const removeSpaces = "Hola mundo feliz";

const result = (string) => {
  return string.split(" ").join("");
};

console.log(result(removeSpaces));

//  * 4 Reemplazar caracteres
// Planteamiento:
// Crear una función que tome una cadena, un carácter a buscar y un carácter de reemplazo,
// y devuelva una nueva cadena con todas las ocurrencias del carácter buscado reemplazadas.
// Entrada:
// javascript
// reemplazarCaracter("JavaScript", "a", "o");
// Salida Esperada:
// JovoScript

const replaceCharacters = (str, letter, value) => {
  return str.replaceAll(letter, value);
};

console.log(replaceCharacters("JavaScript", "a", "o"));

/* 5 Obtener subcadena
Planteamiento:
Crear una función que tome una cadena y dos índices como entrada, y devuelva la subcadena
que está entre esos dos índices.
Entrada:
obtenerSubcadena("JavaScript", 2, 8);
Salida Esperada:
vaScrip*/

const searchSubstring = (str, start, find) => {
  return str.slice(start, find + 1);
};

console.log(searchSubstring("JavaScript", 2, 8));

// /* 6 Ordenar array de objetos
// Planteamiento:
// Crear una función que tome un array de objetos con una propiedad "edad" y los ordene de menor a mayor según la edad.
// Entrada:

const orderArray = [
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 22 },
  { nombre: "Juan", edad: 25 },
];

const result1 = (objt) => {
  return objt.sort((a, b) => a.edad - b.edad);
};

console.log(result1(orderArray));

// Salida Esperada:
// [
//   { nombre: "Pedro", edad: 22 },
//   { nombre: "Juan", edad: 25 },
//   { nombre: "María", edad: 30 }

/* 7 Multiplicar elementos por un número
Planteamiento:
Crear una función que tome un array de números y un número multiplicador como entrada, y
devuelva un nuevo array con todos los elementos multiplicados por el número dado.
Entrada:
multiplicarPor([1, 2, 3, 4], 5);
Salida Esperada:
[5, 10, 15, 20]*/

const multipliqueNumber = (array, num) => {
  return array.map((number) => number * num);
};

console.log(multipliqueNumber([1, 2, 3, 4], 5));

/* 8 Separar números pares e impares
Planteamiento:
Crear una función que tome un array de números como entrada y devuelva un objeto con dos arrays,
uno para los números pares y otro para los impares.
Entrada:
separarParesImpares([1, 2, 3, 4, 5, 6]);
Salida Esperada:
{
  pares: [2, 4, 6],
  impares: [1, 3, 5]
}
*/

const numbers = [1, 2, 3, 4, 5, 6];

const separateEvenOdd = (arr) => {
  const pares = arr.filter((num) => num % 2 === 0);
  const Impares = arr.filter((num) => num % 2 !== 0);

  return { pares, Impares };
};

console.log(separateEvenOdd(numbers));


// /* 9 Palabras más largas
// Planteamiento:
// Crear una función que tome un array de palabras como entrada y devuelva la palabra más larga.


// Entrada:
// palabraMasLarga(["gato", "perro", "elefante", "rinoceronte"]);
// Salida Esperada:
// rinoceronte*

const longerWords = (letter) => {
    return letter.sort((a, b) => b.length - a.length)[0];
}

console.log(longerWords(["gato", "perro", "elefante", "rinoceronte"]))



/* 10  Palabras con longitud específica
Planteamiento:
Crear una función que tome un array de palabras y una longitud como entrada, y devuelva un nuevo
array con las palabras que tienen esa longitud.
Entrada:
filtrarPorLongitud(["casa", "perro", "sol", "hola"], 3);
Salida Esperada:
["sol"]*/

const wordsWithLength = (words, value) => {
    return words.filter((word) => word.length === value)

} 
 console.log(wordsWithLength(["casa", "perro", "sol", "hola"], 3))


