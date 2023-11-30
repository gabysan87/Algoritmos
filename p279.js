// Ejercicio 1: Suma de elementos
// Enunciado: Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.

const arrayNumber = [1, 2, 3, 4, 5];

const sumNumber = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};

console.log(sumNumber(arrayNumber));

// Ejercicio 2: Filtrar números pares
// Enunciado: Escribe una función que reciba un array de números y devuelva un nuevo array con solo los números pares.

const arrayPair = [1, 2, 3, 4, 5, 6];

const filterpairs = (number) => {
  return number.filter((num) => num % 2 === 0);
};

console.log(filterpairs(arrayPair));

// Ejercicio 3: Encontrar el número mayor
// Enunciado: Escribe una función que encuentre el número más grande en un array de números.

const array = [8, 3, 11, 5, 2];

const biggerNumber = (num) => {
  return Math.max(...num);
};

console.log(biggerNumber(array));

// Ejercicio 4: Concatenar arrays
// Enunciado: Escribe una función que concatene dos arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenateArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

console.log(concatenateArrays(array1, array2));

// Ejercicio 5: Contar ocurrencias
// Enunciado: Escribe una función que cuente cuántas veces aparece un elemento en un array.

const array5 = [1, 2, 3, 4, 2, 5, 2];
const element = 2;

const contarOcurrencias = (num, sum) => {
    return num.filter((item) => item === sum).length
  
};

console.log(contarOcurrencias(array5, element));


// Ejercicio 6: Invertir array
// Enunciado: Escribe una función que invierta un array.

const arrays = [1, 2, 3, 4, 5];

const investArray = (number) => {
return    number.reverse()
}

console.log(investArray(arrays))

// Ejercicio 7: Eliminar duplicados
// Enunciado: Escribe una función que elimine los elementos duplicados de un array.


const arrayDuplicate = [1, 2, 2, 3, 4, 4, 5];

const removeDuplicate = (number) => {
    return [...new Set(number)]
}

console.log(removeDuplicate(arrayDuplicate))

// Ejercicio 8: Rotar a la derecha
// Enunciado: Escribe una función que rote a la derecha los elementos de un array dado un número específico de veces.

const rotateNumber = [1, 2, 3, 4, 5];
const veces = 2;

const numberOfTimes = (arr) =>{
    return  [...arr.splice(-veces),...arr.splice(rotateNumber.length-veces-1)]
}

console.log(numberOfTimes(rotateNumber, veces))


// Ejercicio 9: Calcular promedio
// Enunciado: Escribe una función que calcule el promedio de un array de números.

const arrayAverage = [10, 20, 30, 40, 50];

const calculateAverage = (num) => {
    return num.reduce((acc,curr) => acc + curr) / num.length 
}


console.log(calculateAverage(arrayAverage)); // Salida esperada: 30


// Ejercicio 10: Verificar palíndromo
// Enunciado: Escribe una función que verifique si un array de caracteres forma un palíndromo.

const arrayPalindrome = ['a', 'b', 'c', 'b', 'a'];

const isPalindrome = (array) => {
const stringOriginal = array.join('');
const stringInvertido = array.reverse().join('');

return stringOriginal === stringInvertido;
}
console.log(isPalindrome(arrayPalindrome)); 
// Salida esperada: true

// Crea un objeto que represente a una persona, con las propiedades nombre, edad, género y ocupación. Luego, crea una función que reciba un objeto persona y devuelva una cadena con una presentación de la misma, por ejemplo: “Hola, me llamo Ana, tengo 25 años, soy mujer y trabajo como programadora”.
// Entrada: {nombre: “Pedro”, edad: 32, género: “hombre”, ocupación: “profesor”}
// Salida: “Hola, me llamo Pedro, tengo 32 años, soy hombre y trabajo como profesor”

const person = {
    name: "Pedro",
    age: 32,
    gender: "hombre",
    ocupacion: "profesor"
}

const result = `Hola, me llamo ${person.name}, tengo ${person.age}, soy ${person.gender} y trabajo ${person.ocupacion}`

console.log(result)