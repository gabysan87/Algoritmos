// Dada una cadena de palabras (x), debe devolver una matriz de palabras, ordenadas alfabéticamente por el carácter final de cada una.

// Si dos palabras tienen la misma última letra, la matriz devuelta debería mostrarlas en el orden en que aparecieron en la cadena dada.

// entrada: 'man i need a taxi up to ubud'

// salida: ['a','need','ubud', 'i','taxi','man','to','up']

const sortByLastLetter = (input) => {
  // Dividir la cadena en palabras
  const words = input.split(" ");

  // Ordenar las palabras por el último carácter y mantener el orden original en caso de empate
  return words.sort((a, b) => {
    const CharA = a[a.length - 1];
    const CharB = b[b.length - 1];

    return CharA < CharB ? -1 : CharA > CharB ? 1 : 0;
  });
};
const input = "man i need a taxi up to ubud";
const result = sortByLastLetter(input);
console.log(result);
