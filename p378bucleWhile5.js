

//Ejercicio 5: Adivinar el número
// Enunciado:
// Escribe un programa en JavaScript que pida al usuario un número entero y devuelva el número invertido utilizando un bucle while.

let numero = 54321;
let numeroInvertido = 0;

while (numero != 0) {
    let digito = numero % 10; //numero % 10: Calcula el último dígito de numero utilizando el operador módulo (%), que da el resto de la división de numero por 10.
    numeroInvertido = numeroInvertido * 10 + digito; //numeroInvertido * 10 + digito: Multiplica numeroInvertido por 10 y le suma digito, construyendo el número invertido paso a paso.
    numero = Math.floor(numero / 10); //Math.floor(numero / 10): Elimina el último dígito de numero utilizando la división entera (Math.floor()).
}

console.log("El número invertido es: " + numeroInvertido);

//Iteraciones del Bucle while:

// Iteración 1:
// numero = 12345
// digito = 12345 % 10 = 5
// numeroInvertido = 0 * 10 + 5 = 5
// numero = Math.floor(12345 / 10) = 1234

// Iteración 2:
// numero = 1234
// digito = 1234 % 10 = 4
// numeroInvertido = 5 * 10 + 4 = 54
// numero = Math.floor(1234 / 10) = 123

// Iteración 3:
// numero = 123
// digito = 123 % 10 = 3
// numeroInvertido = 54 * 10 + 3 = 543
// numero = Math.floor(123 / 10) = 12

// Iteración 4:
// numero = 12
// digito = 12 % 10 = 2
// numeroInvertido = 543 * 10 + 2 = 5432
// numero = Math.floor(12 / 10) = 1

// Iteración 5:
// numero = 1
// digito = 1 % 10 = 1
// numeroInvertido = 5432 * 10 + 1 = 54321
// numero = Math.floor(1 / 10) = 0
// El bucle se detiene porque numero se convierte en 0, lo que no cumple con la condición numero != 0.


