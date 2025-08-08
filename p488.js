let datos = "gaby"; //su valor se puede cambiar
const date = "sanchez"; // su valor no se puede modificar

//tipos de datos primitivos: son inmutables (no puedes cambiarlo solo reemplazarlos) y se pasan por valor
// 1- Symbol: valores unicos inmutables, identificadores de propiedades
// 2- Null: representa ausencia de valor
// 3- Undefined: valor por defecto de una variable pero no inicializada
// 4- string: texto que se puede definir con comillas dobles o bastick
// 5- Number: representa numeros enteros y decimales
// 6- boolean: solo puede ser true o false, es util es condicionales
// 7- Bigint: sirve para nro. estenros muy grandes, que number no puede manejar, se crea con N al final

// tipos de datos No primitivos:
// 1- array: lista con inidce numericos
// 2- object: coleccion de pares- clave-valor
// 3- set: conjunto sin duplicados
// 4- map: claves de cualquier tipo
// 5- function: bloque de codigo ejecutable, tambien es un objeto
// 6- date: fechas y horas

let number = 4;
let string = "gaby";
let boolean = true;
let nulo = null;
let Undefined;
let object = { name: "gabriela", apellido: "sanchez" };
let array = ["Gaby", "sanchez"];

// operadores comparacion:
// == → igual a (sin importar el tipo)

// === → igual a (y mismo tipo)

// // != → diferente

// // !== → diferente (y tipo distinto)

// → mayor que

// < → menor que

// >= → mayor o igual

// <= → menor o igual

let age = 19;
if (age >= 18) {
  console.log("puedes entrar a la discoteca");
} else {
  console.log("No puede entrar a la discoteca");
}

console.log(5 == "5");
console.log(5 === "5");

//operadores logicos
// && (AND) → todas deben ser verdaderas

// || (OR) → al menos una debe ser verdadera

// // ! (NOT) → niega el valor

let posit = true;
let negat = false;

if (posit && !negat) {
  console.log("hola");
} else {
  console.log("chao");
}

const practicaFunction = (dato) => {
  return dato;
};
console.log(practicaFunction("gabriela"));
