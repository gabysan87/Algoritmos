//Escribe una función que tome un array de números como entrada y devuelva un nuevo array donde los ceros estén al final y los demás números mantengan su orden original.

const zeroEndTwo = (arr) => {
    const withoutZeros = arr.filter((num) => num !== 0)
    const withZeros = arr.filter((number) => number === 0)
return withoutZeros.concat(withZeros)
};

// console.log(zeroEnd([0, 2, 0, 1, 3, 0, 4]));
console.log(zeroEndTwo([0, 2, 0, 1, 3, 0, 4]));

//escribe una funcion donde cada subarray contiene palabras que son anagramas entre sí.

//1 primero creo una const para inicicalizar un objeto vacio
//2 - creo un bucle con for of, 

const groupAnagrams = (words) => {
    const anagrams = {}
    for (const word of words ){
     const sortWord = word.split("").sort().join("")
     if(!anagrams[sortWord]){
        anagrams[sortWord] = []
     }anagrams[sortWord].push(word)
    }
    return Object.values(anagrams)
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


// Contar Ocurrencias
// Enunciado: Crea una función que cuente cuántas veces aparece cada categoría en un array de objetos.

const items = [
    { tipo: 'fruta', nombre: 'manzana' },
    { tipo: 'fruta', nombre: 'banana' },
    { tipo: 'verdura', nombre: 'zanahoria' }
];

const result = (arr) => {
return arr.reduce((acc, curr) => {
acc[curr.tipo] = (acc[curr.tipo] || 0) + 1
return acc
},{})
}
console.log(result(items))

// salida
// { fruta: 2, verdura: 1 }

// Dado dos arrays de objetos, implementa una función que los fusione en uno solo eliminando los objetos duplicados basados en una propiedad específica.

// Entrada:
const array1 = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
];
const array2 = [
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Pedro" },
];

const fusionados = (arrOne, arrTwo, property) => {
  // Combina ambos arrays
  const combinado = [...arrOne, ...arrTwo];

  // Filtra los duplicados basándose en la propiedad específica
  const resultado = combinado.filter((element, index, array) => index === array.findIndex((item) => item[property] === element[property]));
  return resultado;
};

console.log(fusionados(array1, array2, "id"));