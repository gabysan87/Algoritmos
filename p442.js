//5- Sumar los Elementos de un Array:
// Enunciado:
// Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.

const sumNumb = (arr) => {
    return arr.reduce((acc, curr)=> acc + curr,0)
}
console.log(sumNumb([1, 2, 3, 4]))


Entrada: [1, 2, 3, 4]
Salida: 10

//6-  Filtrar Elementos Pares en un Array:
// Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.

const filterPair = (array) => {
    return array.filter((num) => num % 2 === 0)
}
console.log(filterPair( [1, 2, 3, 4, 5, 6]))
Entrada: [1, 2, 3, 4, 5, 6]
Salida: [2, 4, 6]

// escribe una funcion que reciba un numero como argumento y determine si ese nro es par o impar
const numberPair = (num) => {
    return num % 2 === 0 ? "es par" : "impar"
}
console.log(numberPair(2))
console.log(numberPair(3))

//escribe una funcion que reciba  un arreglo de objeto y un nro. como parametro , debera devolver el objeto que contenta el o haga con el numero 

const usuarios = [
    { id: 1, name: "Juan Pérez" },
    { id: 2, name: "Ana Gómez" },
    { id: 3, name: "Luis Martínez" },
    { id: 4, name: "Carla Torres" }
  ];

  const result = (arr, num) => {
    // return [...arr, {id:5, name: "tony"}] // agrega un nuevo objeto en el array

    return arr.map((element) => {
        if (element.id === 1){
            return {
                ...element,
                name: "Tony",
                edad: num,
            }
        }
    })
  }

// const deleteElement

  console.log(result(usuarios, 3))

//   return arr.find((number) => number.id === num)