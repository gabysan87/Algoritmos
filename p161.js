// // Factorial de un número: 
// Escribe un programa que calcule el factorial de un número ingresado por el usuario utilizando un bucle for. EL factorial de un número n se calcula multiplicando todos los números enteros positivos desde a hasta n

const factorial = (n) => {
  let multiplique = 1
  for (let i = 1; i<= n; i++){
    multiplique = multiplique * i;
  }
return multiplique
}

console.log(factorial(4))