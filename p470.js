// Sumar 10 a los números negativos solamente
// Entrada : [-5, 10, -3, 8, -20]
// Aumentar en 10 solo a los negativos. Los positivos se quedan igual.
// Salida: [5, 10, 7, 8, -10

const number = [-5, 10, -3, 8, -20];

const incrementNumber = (array) => {
  return array.map((num) => (num < 0 ? num + 10 : num));
};

console.log(incrementNumber(number));

//Crear array de longitudes de palabras

// entrada:

const words = ["sol", "montaña", "playa"];

// Objetivo:
// Crear un array con el número de letras de cada palabra.

// salida : [3, 7, 5]

const numbersOfLetters = (arr) => {
  return arr.map((num) => num.length);
};
console.log(numbersOfLetters(words));

// Convertir números a booleanos (mayores a 50)
// entrada :
//Salida : [false, true, false, true]
// Retornar true si el número es mayor a 50, de lo contrario false

const numbers1 = [25, 70, 45, 100];

const ConvertNumbersToBooleans = (array) => {
  return array.map((num) => (num > 50 ? true : false));
};

console.log(ConvertNumbersToBooleans(numbers1));

//  Determinar si un número es par o impar
// Entrada: num = 7
// Salida esperada: "impar"

// Reto: Usa el operador ternario para retornar "par" si el número es par, y "impar" si no lo es.

const numbers = [10, 5, 2, 6, 25];
const numberIsEven = (array) => {
  return array.map((num) => (num % 2 === 0 ? "Par" : "Impar"));
};
console.log(numberIsEven(numbers));

// Verificar si una temperatura está por encima del punto de ebullición
// Entrada: temp = 105
// Salida esperada: "caliente"

// Reto: Si temp > 100, devuelve "caliente"; si no, "normal"

const temp = 105;

const checkTemperature = (number) => {
  return number > 100 ? "caliente" : "normal";
};
console.log(checkTemperature(temp));

// Comparar dos números y devolver el mayor
// Entrada: a = 15, b = 20
// Salida esperada: 20

// Reto: Usa el operador ternario para devolver el número mayor.

const numA = 15;
const numB = 20;
const compareNumber = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};
console.log(compareNumber(numA, numB));

// Verificar si una palabra tiene más de 5 letras
// Entrada: "Emma"
// Salida esperada: "corta"

// Reto: Si la palabra tiene más de 5 caracteres, retorna "larga", si no, "corta".

const countCharacters = (str) => {
  // const item = [...str].length;
  return str.length > 5 ? "larga" : "Corta";
};
console.log(countCharacters("Emma"));

// Verificar edad para acceso
// Entrada: edad = 17
// Salida esperada: "denegado"

// Reto: Si edad >= 18, retorna "permitido"; si no, "denegado".

const verifyAge = (num) => (num >= 18 ? "permitido" : "denegado");

console.log(verifyAge(17));
