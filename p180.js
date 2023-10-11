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