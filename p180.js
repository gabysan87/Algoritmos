const objs = [{
    nombre: "Marcos", 
    edad: 15
},
{
    nombre: "Lena", 
    edad: 10
}]

const result2 = objs.reduce ( (acc, elementactual) => {
    return acc += elementactual.edad
},0)

console.log(result2)

// array.reduce(callback(acumulador, valor actual, índiceActual , array) [, valorInicial])