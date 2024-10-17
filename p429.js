// 1- Verificación de edad para entrar a una página
// Usando el operador ternario para verificar si alguien es mayor de edad:

// Con corto circuito para mostrar un mensaje solo si cumple la condición:

const age = 19

const ageAllowed = age > 18 ? "Permitido" : "Restringido"
console.log(ageAllowed)

//short circuit
const checkAgeShortCircuit = (age) => {
    return age >= 18 && "Allowed to enter the page"
  };
  
  console.log(checkAgeShortCircuit(20)); 
  console.log(checkAgeShortCircuit(16));

// 2- Asignar valor predeterminado
// Usar el operador ternario para asignar un valor predeterminado si una variable es null o undefined:

// Con el operador de corto circuito:


const valueAsigne = ""

const asigneValueTwo = valueAsigne ? "Online" : "Offline"
console.log(asigneValueTwo)

//  corto circuito:
const assignDefaultValue = valueAsigne || "Offline" 
console.log(assignDefaultValue)


// 3- Verificar si un número es par o impar
// Con el operador ternario para determinar si un número es par o impar:

// Con el operador de corto circuito para ejecutar solo si es par:

let nro = 4
let number = nro % 2 === 0 ? "Par" : "Impar"

console.log(number)

//short circuit
const checkNumber = nro % 2 === 0 && "EL nro es par"
console.log(checkNumber)

// 4- Verificar si un usuario está autenticado
// Con el operador ternario para decidir qué mensaje mostrar:

// Con corto circuito para ejecutar solo si está autenticado:


const user = true
const verifyUser = user ? "Usuario autenticado" : "Inicia sesión"
console.log(verifyUser)

//short circuit
const checkUserWithShortCircuit = user && "Usuario autenticado"
console.log(checkUserWithShortCircuit)


// 5- Definir color basado en condición
// Usar el operador ternario para establecer un color basado en una condición:

// Con corto circuito para cambiar el color solo si la temperatura es mayor a un valor:

const temperature = 31

const colorTemperature = temperature > 27 ? "rojo" : "verde"
console.log(colorTemperature)

//cortocircuito
const colorTemperatureTwo = temperature >= 30 && "rojo" || "verde"
console.log(colorTemperatureTwo)
