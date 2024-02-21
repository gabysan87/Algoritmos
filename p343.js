// Escribe una función que tome una matriz como argumento. Debería devolver verdadero si todos los elementos de la matriz son iguales. De lo contrario, debería devolver falso.
// // console.log(myFunction([true, true, true, true])); true
// // console.log(myFunction(['test', 'test', 'test'])); true
// // console.log(myFunction([1,1,1,2])); false 
// // console.log(myFunction(['10',10,10,10])); false

const myFunction= (arr) => {
 return arr.every((item) => item === arr[0])

}

console.log(myFunction([true, true, true, true])); true
console.log(myFunction(['test', 'test', 'test'])); true
console.log(myFunction([1,1,1,2])); false 
console.log(myFunction(['10',10,10,10])); false

// Convertir un array de nombres a un array de objetos con propiedades de longitud del nombre y si es corto o largo:
// // Output: [{name: "John", length: 4, isShort: true}, {name: "Jane", length: 4, isShort: true}, {name: "Alexandra", length: 9, isShort: false}, {name: "Michael", length: 7, isShort: false}]

//  const names = ["John", "Jane", "Alexandra", "Michael"];

const names = ["John", "Jane", "Alexandra", "Michael"]

const longShortName = (array) => {
    return array.map((item) => {
        return {
            name: item,
            length: item.length,
            isShort: item.length < 5
        }
    
    })
}

console.log(longShortName(names))