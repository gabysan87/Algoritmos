// 1- comparacion de edades:
//Si la edad de una persona es mayor o igual a 18 años, devolver "Mayor de edad", sino devolver "Menos de edad"

const ageComparison = (arr) => {
    return arr >= 18 ? "Mayor de edad" : "Menor de edad"
}
console.log(ageComparison([18]))
console.log(ageComparison([17]))
console.log(ageComparison([25]))

//2- Acceso permitido o denegado: 
//Si una persona tiene mas de 18 años y es estudiante, devolver "Acceso permitido", de lo contrario devolver "Acceso denegado".

const olderStudents = (age, esEstudiante) => {
    return age >= 18 || esEstudiante ? "Acceso Permitido" : "Acceso denegado"
}

console.log(olderStudents(20, true));
console.log(olderStudents(17, true));
console.log(olderStudents(18, false));
console.log(olderStudents(18, true))
console.log(olderStudents(16, false));

// 3- Categoría de edad: Si una persona tiene menos de 18 años, devolver "Niño", si tiene entre 18 y 60 años devolver "Adulto", y si tiene más de 60 años devolver "Adulto mayor".

const ageCategory = (person) => {
//   if( person <= 18) {
//     return "Niño"
//   }else if (person > 18 && person <= 60) {
// return "Adulto"
//   }else if (person > 60){
//     return "Adulto mayor"
//   }
return person <= 18 ? "Niño" : 
person > 18 && person <= 0 ? "Adulto" : 
"Adulto mayor";
}


console.log(ageCategory(18))
console.log(ageCategory(20))
console.log(ageCategory(70))

// 4- Validación de nombre: 
// Si el nombre ingresado es "Juan", devolver "Bienvenido, Juan", si no, devolver "Usuario desconocido".

const nameValidation = (string) => {
    return string === "Juan" ? "Bienvenido, Juan" : "Usuario desconocido"
} 
console.log(nameValidation("Juan"))
console.log(nameValidation("Pedro"))

// 5- Acceso con múltiples condiciones: 
//Si una persona está registrada como usuario y tiene saldo suficiente, devolver "Compra permitida", de lo contrario devolver "Compra denegada".

const accessWithMultipleConditions = (usuario, saldo) => {
 return (usuario && saldo > 0 ) ? "Compra permitida" : "Compra denegada"
}
console.log(accessWithMultipleConditions("Juan", 100))
console.log(accessWithMultipleConditions("Maria", 0))
console.log(accessWithMultipleConditions("", 0))


// 6- Número positivo, negativo o cero: 
//Si un número es mayor que 0 y menor que 100, devolver "Número positivo menor que 100", si es negativo devolver "Número negativo", y si es igual a 0 devolver "Número cero".

const positiveNegativeOrZeroNumber = (number) => {
    return number > 0 && number < 100 ? "Número positivo menor que 100" : 
    number < 0 ? "Número negativo" :
    "Número cero"
}
console.log(positiveNegativeOrZeroNumber(10))
console.log(positiveNegativeOrZeroNumber(-10))
console.log(positiveNegativeOrZeroNumber(0))

// 7- Estado de una variable booleana: 
//Si una variable booleana es verdadera, devolver "Verdadero", si es falsa devolver "Falso".

const booleanVariable = (bolean) => {
return bolean === true ? "Verdadero" : "Falso"
}
console.log(booleanVariable(true))
console.log(booleanVariable(false))
console.log(booleanVariable(undefined))
console.log(booleanVariable("hola"))

// 8- Acceso según edad o condición: 
// Si una persona tiene al menos 18 años o si es estudiante, devolver "Acceso permitido", de lo contrario devolver "Acceso denegado".

const accessBasedOnAgeOrCondition = (age, esEstudiante ) => {
    return age >= 18 || esEstudiante ? "Acceso permitido" : "Acceso denegado"

}
console.log(accessBasedOnAgeOrCondition(18, true))
console.log(accessBasedOnAgeOrCondition(18, false))
console.log(accessBasedOnAgeOrCondition(17, false))
console.log(accessBasedOnAgeOrCondition(17, true))


// 9- Comparación de colores favoritos: 
//Si el color favorito es "rojo", devolver "Rojo es el color favorito", si es "azul", devolver "Azul es el color favorito", de lo contrario devolver "Color no especificado".

const colorComparison = (color) => {
return color === "rojo" ? "Rojo es el color favorito" : color === "azul" ? "Azul es el color favorito" : "Color no especificado"
}
console.log(colorComparison("azul"))
console.log(colorComparison(""))
console.log(colorComparison("hola"))
console.log(colorComparison("verde"))
console.log(colorComparison("rojo"))


// 10 Condición de registro:
// Si una persona no está registrada, devolver "Registro requerido", si está registrada devolver "Acceso permitido".

const registrationCondition = (registrada) => {
return !registrada ? "Registro requerido" : "Acceso permitido"
}

console.log(registrationCondition(false))
console.log(registrationCondition(true))

// 11- Verificación de un número en un rango: 
//Si un número está entre 10 y 20 (inclusive), devolver "Dentro del rango", si no, devolver "Fuera del rango".

const checkingANumberInARange = (num) => {
return num >= 10 && num <= 20 ? "Dentro del rango": "Fuera del rango"
}
console.log(checkingANumberInARange(10))
console.log(checkingANumberInARange(9))
console.log(checkingANumberInARange(20))

//12- Condiciones de compra: 
// Si una persona tiene entre 18 y 60 años y tiene más de 1000 dólares, devolver "Puede comprar el producto", de lo contrario devolver "No puede comprar el producto".

const condicionesDeCompra = (age, money) => {
return (age >= 18 && age <= 60) && money >= 1000 ? "Puede comprar el producto" : "No puede comprar el producto"
}
console.log(condicionesDeCompra(18, 1000))
console.log(condicionesDeCompra(18, 800))
console.log(condicionesDeCompra(20, 1800))


// 13- Condiciones de temperatura: 
// Si la temperatura es menor de 0 grados, devolver "Hace frío", si está entre 0 y 20 grados, devolver "Temperatura moderada", si está entre 20 y 35 grados, devolver "Hace calor", de lo contrario devolver "Temperatura extrema".


const temperatureConditions = (temp) => {
    return temp <= 0 ? "Hace frío" : 
    temp > 0 && temp < 20 ? "Temperatura moderada" : 
    temp >= 20 && temp <= 35 ? "Hace calor" :
    "Temperatura extrema"
}

console.log(temperatureConditions(0))
console.log(temperatureConditions(5))
console.log(temperatureConditions(20))
console.log(temperatureConditions(40))



// 14- Validación de una contraseña:
// Si la contraseña tiene más de 8 caracteres y contiene al menos una letra mayúscula, devolver "Contraseña segura", si no, devolver "Contraseña débil".

const validatingAPassword = (password) => {
return password.length >= 8 ? "Contraseña segura" : "Contraseña débil"
}
console.log(validatingAPassword("nflakfasf"))
console.log(validatingAPassword("nflakfas"))


// 15- Verificación de disponibilidad de un producto: 
// Si un producto está en stock y el usuario tiene suficiente crédito, devolver "Compra permitida", si no, devolver "Producto no disponible" o "Crédito insuficiente", dependiendo del caso.

const checkingTheAvailabilityOfAProduct = (stock, credit) => {
    return !stock ? "Producto no disponible" :  // Si el producto no está en stock.
    !credit ? "Crédito insuficiente" :  // Si el producto está en stock, pero el crédito es insuficiente.
    "Compra permitida"; // Si el producto está en stock y el crédito es suficiente.
}
console.log(checkingTheAvailabilityOfAProduct(true, true))
console.log(checkingTheAvailabilityOfAProduct(false, true))
console.log(checkingTheAvailabilityOfAProduct(false, false))
console.log(checkingTheAvailabilityOfAProduct(true, false))

// Flujo lógico:

// Primero se evalúa si el producto está en stock.
// Luego se evalúa si el usuario tiene suficiente crédito.
// Si ambas son verdaderas, la compra se permite; si alguna falla, se devuelve el mensaje correspondiente.