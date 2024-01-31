// Agrupar objetos por propiedad:

// Planteamiento:
// Crear una función que agrupe objetos de un array basándose en el valor de una propiedad específica.

// entrada:
const inputArray = [
  { id: 1, group: "A" },
  { id: 2, group: "B" },
  { id: 3, group: "A" },
  { id: 4, group: "C" },
  { id: 5, group: "B" },
];

const groupObject = (arr) => {
  return arr.reduce((acc, curr ) => {
    // console.log(curr.group)
    const { group } = curr 
    acc[group] = acc[group] ? [...acc[group], curr] : [curr];
    return acc;
  }, {});
};

console.log(groupObject(inputArray));

// salida: {
//     'A': [
//       { id: 1, group: 'A' },
//       { id: 3, group: 'A' },
//     ],
//     'B': [
//       { id: 2, group: 'B' },
//       { id: 5, group: 'B' },
//     ],
//     'C': [
//       { id: 4, group: 'C' },
//     ],
//   };
