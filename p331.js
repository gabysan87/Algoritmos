// Planteamiento:
// Crear una función que elimine objetos de un array basándote en un rango de valores para una propiedad específica.
// Entrada:

const inputArray = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 3, age: 22 },
  { id: 4, age: 35 },
];

const minAge = 25;
const maxAge = 30; 

const deleteObject = (arr, valor1, valor2) => {
    return arr.filter((item) => {
        return item.age < valor1 || item.age > valor2
    })
}

console.log(deleteObject(inputArray,minAge,maxAge))

// Salida: const outputArray = [
//   { id: 3, age: 22 },
//   { id: 4, age: 35 },
// ];

// Planteamiento:
// Crear una función que reemplace los valores nulos o indefinidos en un array de objetos con un valor predeterminado.
// Entrada: 

const inputArray2 = [
  { id: 1, name: 'John', age: null },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: undefined },
];
const replacementValue = 'N/A'; 

const replaceValues = (arr, value) => {
    return arr.map((item) => {
        return {
            ...item,
            age: typeof item.age === "number" ? item.age : value
        }
    }) 
}

console.log(replaceValues(inputArray2,replacementValue))

// Salida: const outputArray = [
//   { id: 1, name: 'John', age: 'N/A' },
//   { id: 2, name: 'Jane', age: 25 },
//   { id: 3, name: 'Doe', age: 'N/A' },
// ];
