// ¿La cadena está en mayúsculas?

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
// En este Kata, se dice que una cadena está TODO EN MAYÚSCULAS siempre que no contenga ninguna letra minúscula, por lo que cualquier cadena que no contenga ninguna letra se considera trivialmente que está TODO EN MAYÚSCULAS.


String.prototype.isUpperCase = function() {
    // your code here
    // return !/[a-z]/.test(this);
    // return this == this.toUpperCase() ? true : false;
    if(this.toString() == this.toUpperCase()){
        return true;
      } else{
        return false;
  }
}

console.log('c'.isUpperCase(),  'c is not upper case');
console.log('C'.isUpperCase(),  'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(),  'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(),  'HELLO I AM DONALD is upper case');