// ¡Convierta una cadena en un número!
// Descripción
// Necesitamos una función que pueda transformar una cadena en un número. ¿Qué formas de conseguirlo conoces?

// Nota: No te preocupes, todas las entradas serán cadenas y cada cadena es una representación perfectamente válida de un número entero.

// Ejemplos
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7
const stringToNumber = function(str){
    // put your code here
    return Number(str)
  }

  console.log(stringToNumber("1234"))
  console.log(stringToNumber("605"))
  console.log(stringToNumber("1405"))
  console.log(stringToNumber("-7"))