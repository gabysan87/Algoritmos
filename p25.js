// Ejercicio: Verificar si una cadena es vacía o tiene más de 10 caracteres
// Planteamiento: Escribe una función que tome como entrada una cadena y determine si es vacía o tiene más de 10 caracteres.
// Entrada: Una cadena, por ejemplo: "Hola, mundo!"
// Salida: true si la cadena es vacía o tiene más de 10 caracteres, false en caso contrario. 

const emptyString = (str) =>  {

// return str.length === 0 || str.length > 10
if (str.length === 0 || str.length > 10 ) {
    return true
}
else {
    return
}
}

console.log(emptyString("Hola, mundo!"))
console.log(emptyString("Hol mundo!"))

// utilizo el operador length para obtener la longitud de la cadena y luego comparamos esa longitud con 0 y 10 utilizando operadores lógicos (||). Si la cadena tiene una longitud igual a 0 o mayor que 10, la función devuelve true, lo que significa que la cadena es vacía o tiene más de 10 caracteres. De lo contrario, devuelve false.