// Encuentra el número entero más pequeño en la matriz.

// Dada una serie de números enteros, su solución debe encontrar el número entero más pequeño.

// Por ejemplo:

// Dada [34, 15, 88, 2]tu solución volverá2
// Dada [34, -345, -1, 100]tu solución volverá-345
// Puedes asumir, a los efectos de este kata, que la matriz proporcionada no estará vacía.

const SmallestIntegerFinder = (args) => {
  return args.sort((a, b) => a - b)[0];
};

console.log(SmallestIntegerFinder([78, 56, 232, 12, 8]))
console.log(SmallestIntegerFinder([78,56,232,12,18]))
