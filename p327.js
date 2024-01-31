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

//   dado un string transformar mayusculas a minusculas y minusculas a mayusculas

const uppercaseLowercase2 = (string) => {
  return string
    .split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};

console.log(uppercaseLowercase2("JavaScript"));

/* 2 Contar vocales
Planteamiento:
Crear una función que tome una cadena como entrada y devuelva el número de vocales en esa cadena.
Entrada:
contarVocales("Programación");
Salida Esperada:
4*/

const countVowels = (str) => {
  return str.match(/[aeiouáéíóú]/gi).length;
};
console.log(countVowels("Programación"));

/* 3 Eliminar espacios en blanco
Planteamiento:
Crear una función que tome una cadena como entrada y devuelva una nueva cadena sin espacios en blanco.
Entrada:
eliminarEspacios("Hola mundo feliz");
Salida Esperada:
Holamundofeliz*/

const removeSpaces = "Hola mundo feliz";

const result = (string) => {
  return string.split(" ").join("");
};

console.log(result(removeSpaces));

/* 4 Reemplazar caracteres
Planteamiento:
Crear una función que tome una cadena, un carácter a buscar y un carácter de reemplazo, 
y devuelva una nueva cadena con todas las ocurrencias del carácter buscado reemplazadas.
Entrada:
javascript
reemplazarCaracter("JavaScript", "a", "o");
Salida Esperada:
JovoScript*/

const replaceCharacters = (str, letter, value) => {
  return str.replaceAll(letter, value);
};

console.log(replaceCharacters("JavaScript", "a", "o"));

/* 6 Ordenar array de objetos
Planteamiento:
Crear una función que tome un array de objetos con una propiedad "edad" y los ordene de menor a mayor según la edad.
Entrada:

Salida Esperada:
[
  { nombre: "Pedro", edad: 22 },
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 }
]*/

const orderArray = [
    { nombre: "María", edad: 30 },
    { nombre: "Pedro", edad: 22 },
    { nombre: "Juan", edad: 25 },
  ];
  
  const result1 = (objt) => {
    return objt.sort((a, b) => a.edad - b.edad);
  };
  
  console.log(result1(orderArray));

//   Planteamiento:
// Crear una función que calcule estadísticas como la media, suma, máximo y mínimo de los valores de una propiedad en un array de objetos.

// entrada: 
const inputArray = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];
// const property = 'value';

const calculateStats = (arr) => {
    // let obj = {}
    let values = arr.map((item) => item.value);
    let max = Math.max(...values)
    let min = Math.min(...values)
    let sum = values.reduce((acc,item) => acc + item, 0)
    let mean = sum / values.length

    return {
        mean,
        sum,
        max,
        min
    }
}

console.log(calculateStats (inputArray))

// salida: const outputObject = {
//   mean: 20,
//   sum: 60,
//   max: 30,
//   min: 10,
// };

