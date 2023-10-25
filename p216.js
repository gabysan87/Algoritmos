//Array de numeros

const numbArray = [1,2,3,4,5]

//Array de String
const arrayString = ["Hola", "que", "tal"]


// Array de objeto

let miArray = [{
    propiedad: "valor",
    propiedad: "valor"
}
]

//Array de array (Matriz)

let miArray2 = [
  [2,4],
  [3,6]
]

console.log(miArray2[0][0])
console.log(miArray2[1][0])

//Array Mixto

let miArray3 = [
    1,
    true,
    [3,2],
    "hola",
    {clave:"valor"}
  ]
  console.log(miArray3.length)

//  Metodos de array

const myArr = [3, 6, 1, 4]

console.log(myArr.sort())
// Devuelve un nuevo array con los valores ordenados
console.log(myArr.pop())
// Devuelve el último elemento del array y lo saca. Devuelve 6
console.log(myArr)
console.log(myArr.push(2))
// Inserta un nuevo elemento en el array, devuelve la nueva longitud
console.log(myArr.sort())
console.log(myArr.reverse())
// Invierte el array

// Metodo Join

let valor = 3
const template = [
    "<li>",
    valor,
    "<li>",
].join("0000");
console.log(template)

//Metodo Math 
// este nos permite aplicar una misma funcion a todos los elementos y transformarlo, devuelve un array completamnete nuevo con todos los elementos transformados 

//Sacar la raiz de cada numero
const myArray = [2,4,6,8]
const raices = myArray.map((item) => {
    return Math.sqrt(item)
})

console.log(raices)

//Metodo filter
//filtrar los numeros que sean multiplos de 3 
const myArrayFilter = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let result = myArrayFilter.filter((item) => item % 3 ===0)

console.log((result))


// Metodo splice
// trocear, parte el array desde la posicion inicial hasta el final 

const myArraySlice = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const resultado = myArraySlice.slice(2)
const resultado2 = myArraySlice.slice(2, 4)
console.log(resultado)
console.log(resultado2)