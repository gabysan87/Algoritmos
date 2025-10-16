// 🧩 3. Agregar un texto

// Entrada: ["manzana", "pera", "uva"]
// Objetivo: devolver un arreglo con el texto "fruta: " al inicio de cada palabra.
// 👉 Salida esperada: ["fruta: manzana", "fruta: pera", "fruta: uva"]
const fruits = ["manzana", "pera", "uva"];
const addText = (array) => {
  return array.map((fruit) => `fruta: ${fruit}`);
};
console.log(addText(fruits));
