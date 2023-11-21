// ¿La cadena está en mayúsculas?
// Tarea
// Cree un método para ver si la cadena está TODO EN MAYÚSCULAS.

// Ejemplos (entrada -> salida)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

const isUpperCase = (str) => {
  return str === str.toUpperCase() ? true : false;
};

console.log(isUpperCase("hello I AM DONALD"));
console.log(isUpperCase("HELLO I AM DONALD"));
console.log(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ"));
console.log(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"));

// String.prototype.isUpperCase = function() {

//     return this == this.toUpperCase() ? true : false;
//   }
