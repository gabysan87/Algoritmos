// Ejercicio: Contar la cantidad de veces que aparece cada palabra
// 🔹 Enunciado:
// Dado un array de palabras, cuenta cuántas veces aparece cada una y guarda los resultados en un objeto.
const palabras = ["gato", "perro", "gato", "loro", "perro", "gato"];

const wordsAnimals = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};
console.log(wordsAnimals(palabras));
// {
//   gato: 3,
//   perro: 2,
//   loro: 1
// }

// Contar números pares e impares
// 📝 Enunciado:
// Dado un array de números, cuenta cuántos son pares y cuántos impares. Devuelve un objeto con las claves par e impar.

const numeros = [1, 2, 3, 4, 5, 6];

const countPair = (array) => {
  return array.reduce((acc, curr) => {
    const property = curr % 2 === 0 ? "par" : "impar";
    acc[property] = (acc[property] || 0) + 1;
    return acc;
  }, {});
};
console.log(countPair(numeros));

// { par: 3, impar: 3 }

// Agrupar animales por primera letra
// 📝 Enunciado:
// Dado un array de nombres de animales, agrúpalos según su letra inicial.

const animales = ["perro", "pato", "gato", "gorila", "pez"];

const groupAnimals = (arr) => {
  return arr.reduce((acc, curr) => {
    const resultAnimales = curr[0];
    acc[resultAnimales] = (acc[resultAnimales] || []).concat(curr);
    // if (acc[resultAnimales]) {
    //   acc[resultAnimales].push(curr);
    // } else {
    //  acc[resultAnimales] = [curr]
    // }
    return acc;
  }, {});
};
console.log(groupAnimals(animales));

// {
//   p: ["perro", "pato", "pez"],
//   g: ["gato", "gorila"]
// }

const usuario = {
  nombre: "Luisa",
  edad: 30,
  ciudad: "Valparaíso",
};

const { nombre, edad, ciudad } = usuario;

function saludar({ nombre, ciudad }) {
  return `Hola soy  ${nombre} y vivo en ${ciudad}`;
}

console.log(saludar(usuario));
