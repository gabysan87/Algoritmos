// Se requiere un algoritmo que encuentre el subarreglo rectangular de una matriz con la suma más alta.
// que subArray tiene mayor Suma 
// 1 recorrer el array, acceder a cada array, 


// Entrada:

const matriz = [
  [1, 2, -1, -4, -20],
  [-8, -3, 4, 2, 1],
  [3, 8, 10, 1, 3],
  [-4, -1, 1, 7, -6]
];

const result = (arr) => {
return arr.map((item) =>  item.reduce((acc, curr) => acc + curr,0)).sort((a,b) => b - a)[0]
} 

console.log(result(matriz))