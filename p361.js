// Se requiere un algoritmo que tome una matriz y la rote 90 grados en el sentido de las agujas del reloj.

// Entrada:
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result = (arr) =>{
    const result= arr.map((_item,index)=>arr.map((element)=>element[index]));
    console.log(result)
      return result.map(item=>item.reverse());
    // return  array[0].map((_item, index) => array.map(item => item[index]).reverse())
}
console.log(result(matriz))
// salida
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]