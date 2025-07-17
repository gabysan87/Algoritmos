// Operador spread  y el rest
// Ejercicio 1: Sumar todos los números

// Crea una función que reciba cualquier cantidad de números y devuelva la suma
const sumar = (...number) => {
  return number.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumar(2, 4, 6, 8));
// Salida esperada: 20

// Ejercicio 2: Filtrar solo los strings
// Entrada: filtrarStrings("hola", 5, true, "Emma", null)
// Salida esperada: ["hola", "Emma"]
// Usa rest para recibir los valores y filtra los que sean de tipo string
const filterStrings = (...value) => {
  return value.filter((elemt) => typeof elemt === "string");
};
console.log(filterStrings("hola", 5, true, "Emma", null));

// Ejercicio 3: Unir dos arrays
// Entrada: [1, 2] y [3, 4]
// Salida esperada: [1, 2, 3, 4]

const joinArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(joinArray([1, 2], [3, 4]));

// Ejercicio 4: Copiar un objeto y cambiar un valor
// Entrada:const user = { nombre: "Emma", edad: 30 };
// Crea una copia del objeto con la edad cambiada a 31.
// Salida esperada: { nombre: "Emma", edad: 31 }

const user = {
  nombre: "Emma",
  edad: 30,
};

const modifiedValue = (obj) => {
  return {
    ...obj,
    edad: 31,
  };
};

console.log(modifiedValue(user));

// Ejercicio 5: Desestructurar con rest
// Entrada: [10, 20, 30, 40]
// Extrae el primer número en una variable y guarda el resto en un array.
// Salida esperada: primero = 10, resto = [20, 30, 40]

const numbers = [10, 20, 30, 40];
const [primero, ...resto] = numbers;

// const result = (num) => {
//   const [primero, ...resto] = num;
//   return {
//     primero,
//     resto,
//   };
// };

// console.log(result(numbers));
console.log("primero =", primero, "resto =", resto);
// console.log("resto =", resto);
