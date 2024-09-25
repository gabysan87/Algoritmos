// Algoritmo: Encontrar palabras duplicadas en una frase

let frase = "javascript is awesome and javascript is fun";

const findDuplicateWord = (str) => {

//    const result = str.split(" ").reduce( (acc,curr) => {
//         if (acc[curr] ){
//             acc[curr] += 1
//         }else {
//             acc[curr] = 1
//         }
//         return acc
//     },{})
//     return Object.keys(result).filter((item) => result[item] > 1 )

//otra opcion 
const result = str.split(" ")
// console.log(result)

 return result.filter((item, index) => result.indexOf(item) !== index )
}

console.log(findDuplicateWord(frase))




// Salida : ["javascript", "is"]