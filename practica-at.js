// Ejercicio 3:
// Planteamiento: Implementa una función que tome un array de objetos y un índice,
// y devuelva el valor de la propiedad 'name' del objeto en ese índice utilizando el método at.
// Entrada:
// let arrayOfObjects = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 22 }
// ];
// let index = 1;
// Salida Esperada:
// Bob

// let arrayOfObjects = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
// ];
// let index = 1;

// const result = (arr,i) => arr.at(1).name

// console.log(result(arrayOfObjects,index))

// Ejercicio 4:
// Planteamiento: Escribe una función que reciba una cadena y dos índices, 
// y devuelva la subcadena entre esos dos índices utilizando el método at.
// Entrada:
// let str = "JavaScript";
// let start = 2;
// let end = 6;
// Salida Esperada:
// vaScr

// let str = "JavaScript";
// let start = 2;
// let end = 6;

// const result2 = (str, start, end) 

// console.log(result)


// / Ejercicio 2:
// Planteamiento: Implementa una función que reciba dos cadenas y un índice, 
// y devuelva una nueva cadena que contenga los caracteres de ambas cadenas en ese índice utilizando charAt().

// Entrada:
// let str1 = "Hola";
// let str2 = "Mundo";
// let index = 2;
// Salida Esperada:
// "lo"

let str1 = "Hola";
let str2 = "Mundo";
let index = 2;


const dosCadenas = (st1, st2, i) => {
    return st1.charAt(i) +  st2.charAt(i)
    // ${str1.charAt(index)}${str2.charAt(index)}
}

console.log(dosCadenas(str1, str2, index))


// Ejercicio 3:
// Planteamiento: Crea una función que tome una cadena y devuelva una nueva cadena 
// con los caracteres en posiciones impares utilizando el método charAt().

// Entrada:
// let str = "abcdefgh";
// Salida Esperada:
// "bdfh"

let str = "abcdefgh";

const nuevaCadena = (string) => {
    return [...string].filter((caract, index) => index % 2 !== 0).join("")
}

console.log(nuevaCadena(str))

// Ejercicio 4:
// Planteamiento: Escribe una función que reciba una cadena y devuelva la misma 
// cadena pero con el primer y último carácter intercambiados utilizando charAt().

// Entrada:
// let str = "programacion";
// Salida Esperada:
// "nrogramaciop"


let strg = "programacion";

const caracterIntercambiados = (st) => {
 let firstLetter = st.charAt()
 let lastLetter = st.charAt(st.length -1)
 return `${lastLetter}${st.slice(1,-1)}${firstLetter}` 
}

console.log(caracterIntercambiados(strg))