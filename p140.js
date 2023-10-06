// Serie de signos de exclamación n.° 1: eliminar un signo de exclamación del final de la cadena

// Descripción:
// Elimina un signo de exclamación del final de una cadena. Para un kata principiante, puedes asumir que los datos de entrada son siempre una cadena, no es necesario verificarlo.

// Ejemplos
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
const remove  = (string) => {
    //coding and coding....

    return  string.replace(/!$/, '');
  }

console.log(remove("Hi!"))
console.log(remove("Hi!!!", "Hi!!"))
console.log(remove("!Hi"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi", "Hi"))

// el método replace() de la cadena para buscar una coincidencia con el patrón /!$/.

// /!$/ es una expresión regular que busca el signo de exclamación ('!') al final ($) de la cadena.
// Si se encuentra una coincidencia (es decir, si la cadena termina con un signo de exclamación), replace() eliminará esa coincidencia y la reemplazará por una cadena vacía (''), lo que efectivamente elimina el signo de exclamación del final.

// Finalmente, la función devuelve la cadena modificada sin el signo de exclamación al final.