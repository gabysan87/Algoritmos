// Contar la frecuencia de elementos:

// Enunciado: Escribe una función que cuente la frecuencia de cada elemento en un array y devuelva un objeto con los resultados.

const letter = (arr) => {
  const frecuencia = {};

  for (const elemento of arr) {
    frecuencia[elemento] = (frecuencia[elemento] || 0) + 1;
  }

  return frecuencia;
};

// for (let i = 0; i < arr.length; i++){
//     const elemento = arr[i];
//     if (frecuencia[elemento]) {
//       frecuencia[elemento] += 1;
//     } else {
//       frecuencia[elemento] = 1;
//     }
//   }
//   return frecuencia;

console.log(letter(["a", "b", "a", "c", "b", "a"]));
// Salida: { 'a': 3, 'b': 2, 'c': 1 }
