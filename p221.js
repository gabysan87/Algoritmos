
//Practica con Spread Operator (copia del array)

const array = [1,2,3,4,5]
const otroArray = [6,7,8,9,10]


const nuevoArray = array.concat(otroArray)
const result = [...array, ...otroArray]

console.log(nuevoArray)
console.log(result)

// Con Objeto

const obj1 = {
    a: "a",
    b: "b",
    c: "c",
}
const obj2 = {
    d: "d",
    e: "e"
}

//Antes se realizaba asi 
const nuevoObject = Object.assign({}, obj1, obj2)

console.log(nuevoObject)


//trae todas las propiedades usando el spread operator 
const nuevoObject2 = {...obj1, ...obj2}

console.log(nuevoObject2)