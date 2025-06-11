// 1. Desestructuración de array con rest

const number = [10, 20, 30, 40, 50];
// Toma el primer número en una variable y el resto en otra
const [primero, segundo, ...restNumber] = number;

console.log(primero);
console.log(restNumber);

// 2. Desestructuración de objeto con rest
// Extrae 'nombre' y agrupa el resto de propiedades en otro objeto
const person = {
  nombre: "Luis",
  edad: 30,
  ciudad: "Madrid",
  profesion: "Desarrollador",
};
const { nombre, ...otrosDatos } = person;
console.log(nombre);
console.log(otrosDatos);

//Rest en desestructuración de parámetros (función con arrays)

const sumar = (primerNumero, ...otrosNumeros) => {
  console.log("Primer numero:", primerNumero);
  console.log("Otros numeros:", otrosNumeros);
};
sumar(5, 10, 15, 20);
