// Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces.

["A","B","A","C","C","C","C"] // -> ["A","C"]
[1,2,3,1,2] // -> [1,2]

const pares = (arr) => {
    let obj = {}
   arr.map((item, _index, array) => {
    const repeat = array.filter((element) => item === element).length
    obj[item] = repeat
   })
   return Object.entries(obj).filter((it) => it[1] % 2 === 0).flat().filter((ele) =>
typeof ele !== "number")
}

console.log(pares(["A","B","A","C","C","C","C"]))
console.log(pares([1,2,3,1,2] ))