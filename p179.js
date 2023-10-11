// Array de numero con reduce 
const numbers = [2,4,6,8,10]

const result = numbers.reduce((acc,curr) => {
    return acc =  acc + curr ;
})

console.log(result)


// String de array 
const strings = ["Mi", "nombre", "es", "Marcos"]

const result1 = strings.reduce((acc, item) => {
return acc += " " + item;
})

console.log(result1)


const objs = [{
    nombre: "Marcos", 
    edad: 15
},
{
    nombre: "Lena", 
    edad: 10
}]

const result2 = objs.reduce ( (acc, curr) => {
    return acc += curr.edad
},0)

console.log(result2)

