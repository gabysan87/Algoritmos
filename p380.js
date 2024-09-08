// crea una funcion que reciba un palabra, que  divida la palabra en la mitad 

//1-Recibir el string: La función toma un parámetro str que es la palabra a dividir.
//2-Contar la cantidad de caracteres: Usamos str.length para obtener la longitud del string.
//3-Dividir el string en la mitad: Calculamos la mitad de la longitud y usamos slice() para cortar el string.
//4-Imprimir el resultado: Si la longitud es impar, el carácter central se asignará a la primera mitad.



const halfWord = (string) =>{
    //PASO 2: contar la cantidad de caracteres del string---
const wordLength = string.length;

//PASO 3: dividir el string en la mitad
//si la mitad es impar, incluimos el caracter del medio en la primera mitad
const mitad = Math.ceil(wordLength / 2);

const primeraMitad = string.slice(0,mitad);
const segundaMitad = string.slice(mitad)

// word2 = wordLength - word1
// console.log(`largo de palabra ${wordLength}, palabra1 ${word1}, palabra2 ${word2}` )

// Paso 4: Imprimir el resultado
console.log(`Primera mitad: ${ primeraMitad }, Segunda mitad: ${segundaMitad}`);

}

console.log(halfWord("lara"))
console.log(halfWord("arbol"))
console.log(halfWord("barquisimeto"))