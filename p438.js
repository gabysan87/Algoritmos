// 1. Filtrar y ordenar una lista de edades
// Objetivo: Filtrar las edades mayores de 18 años y luego ordenarlas de menor a mayor.
// Entrada: [25, 34, 18, 15, 42, 27, 16]

const filterAndSortAList = (arr) => {
  return arr.filter((item) => item >= 18).sort();
};

console.log(filterAndSortAList([25, 34, 18, 15, 42, 27, 16]));
// Salida: [18, 25, 27, 34, 42]

// 2. Obtener los nombres únicos y ordenarlos alfabéticamente
// Objetivo: Eliminar nombres duplicados y ordenar alfabéticamente.
Entrada: ["Juan", "Ana", "Pedro", "Ana", "Juan", "Luis"];
Salida: ["Ana", "Juan", "Luis", "Pedro"];

const uniqueAndOrderedNames = (array) => {
  return [...new Set(array)].sort();
};

console.log(
  uniqueAndOrderedNames(["Juan", "Ana", "Pedro", "Ana", "Juan", "Luis"])
);

// 3. Concatenar y filtrar objetos por valor de propiedad
// Objetivo: Filtrar los objetos donde la propiedad edad sea mayor o igual a 18 y concatenar los nombres resultantes en un solo string.

const person = [
  { nombre: "Ana", edad: 21 },
  { nombre: "Luis", edad: 17 },
  { nombre: "Juan", edad: 20 },
];

const concatenateAndFilter = (array) => {
  return array
    .filter((item) => item.edad >= 18)
    .map((element) => element.nombre)
    .join(", ");
};
console.log(concatenateAndFilter(person));
// Salida: "Ana, Juan"

// 4. Convertir objetos en array y filtrar valores específicos
// Objetivo: Convertir el objeto en un array y luego filtrar solo los valores mayores que 10.
// Entrada:
const specificValues = { a: 5, b: 12, c: 8, d: 10 };

const convertValues = (obj) => {
  // const result = Object.values(obj);
  // console.log(result);
  // return result.filter((item) => item > 10);

  return Object.values(obj).filter((item) => item > 10);
};

console.log(convertValues(specificValues));
// Salida: [12]

// 5. Convertir un array de objetos en un array de valores específicos
// Objetivo: Extraer solo los nombres en un array.

const namePerson = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "Luis" }];

const resultPerson = (arr) => {
  return arr.map((item) => item.nombre);
};
console.log(resultPerson(namePerson));

// Salida: ["Ana", "Juan", "Luis"]


// 6. Convertir un objeto anidado en un array de sus valores
// Objetivo: Convertir todos los valores, incluyendo los anidados, en un array.

const personAnid = {
  persona: { nombre: "Luis", edad: 30 },
  ocupacion: "Ingeniero",
};

const nestedObject = (object) => {
  return Object.values(object); //le falta 
};
console.log(nestedObject(personAnid));
// Salida: [["nombre", "Luis"], ["edad", 30], "Ingeniero"]

// 7. Mapear y reducir un array de objetos para sumar valores
// Objetivo: Obtener la suma de todos los valores de la propiedad precio.
Entrada: [{ precio: 20 }, { precio: 15 }, { precio: 10 }];

const sumOfValues = (arr) => {
  return arr
  .map((item) => item.precio)
  .reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfValues([{ precio: 20 }, { precio: 15 }, { precio: 10 }]));

Salida: 45;

// 8. Eliminar propiedades de objetos y ordenar
// Objetivo: Eliminar la propiedad edad de cada objeto y luego ordenar por nombre.
// Entrada: [{nombre: "Juan", edad: 21}, {nombre: "Ana", edad: 20}]

``

const deleteProp = (arr) => {
  return arr
  .map(({nombre}) => ({nombre}))
  .sort((a, b) => a.nombre.localeCompare(b.nombre))
}
console.log(deleteProp([{nombre: "Juan", edad: 21}, {nombre: "Ana", edad: 20}]))
// Salida: [{nombre: "Ana"}, {nombre: "Juan"}]

// 9. Filtrar y mapear un array de strings
// Objetivo: Filtrar palabras con más de 3 letras y convertirlas a mayúsculas.
// Entrada: ["Hola", "Mundo", "JavaScript", "JS", "Code"]

const filterWords = (array) => {
  return array
    .filter((item) => item.length > 3)
    .map((element) => element.toUpperCase());
};
console.log(filterWords(["Hola", "Mundo", "JavaScript", "JS", "Code"]));
// Salida: ["HOLA", "MUNDO", "JAVASCRIPT", "CODE"]

// 10. Contar la frecuencia de cada elemento en un array
// Objetivo: Crear un objeto que cuente la frecuencia de cada fruta en el array.
// Entrada: ["manzana", "pera", "manzana", "naranja", "pera", "manzana"]


const countElement = (arr) => {
return arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0 ) + 1
return acc
},{})
}
console.log(countElement(["manzana", "pera", "manzana", "naranja", "pera", "manzana"]))
// Salida: { manzana: 3, pera: 2, naranja: 1 }


// 11. Combinar y transformar propiedades de objetos
// Objetivo: Crear un array de strings combinando nombre y edad en el formato "nombre (edad)".
// Entrada: [{nombre: "Luis", edad: 18}, {nombre: "Ana", edad: 22}]

const combineAndTransform = (arr) => {
  return arr.map((item) => `${item.nombre} (${item.edad})`)
} 
console.log(combineAndTransform([{nombre: "Luis", edad: 18}, {nombre: "Ana", edad: 22}]))
// Salida: ["Luis (18)", "Ana (22)"]


// 12. Obtener propiedades de objetos en un array y contar valores específicos
// Objetivo: Crear un objeto que cuente cuántos de cada tipo hay en el array.
// Entrada: [{tipo: "auto"}, {tipo: "moto"}, {tipo: "auto"}, {tipo: "camión"}]


const createAnObjectThatCounts = (arr) => {

  return arr.reduce((acc, curr) => {
    acc[curr.tipo] = (acc[curr.tipo] || 0 ) + 1 
return  acc
  },{})
}
console.log(createAnObjectThatCounts([{tipo: "auto"}, {tipo: "moto"}, {tipo: "auto"}, {tipo: "camión"}]))

// Salida: { auto: 2, moto: 1, camión: 1 }
