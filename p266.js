// ¡Ordenando las palabras!
// Descripción:
// Dada una cadena, debe escribir un método que ordene cada letra de esta cadena en orden ascendente.

// Además, debe validar que la cadena proporcionada no esté vacía ni sea nula. Si es así, el método debería devolver:

// "Invalid String!"
// Notas
// • la cadena dada puede estar en minúsculas y mayúsculas.
// • la cadena podría incluir espacios u otros caracteres especiales como '# ! o ,'. Ordenarlos según sus códigos ASCII
// Ejemplos
// "hello world" => " dehllloorw"
// "bobby"       => "bbboy"
// ""            => "Invalid String!"
// "!Hi You!"    => " !!HYiou"
// ¡Buena suerte! Espero que lo disfrutes


const orderWord = (s) => {
    return [...s].sort((a, b) => a.localeCompare(b))
  }

console.log(orderWord("Hello, World!"))
console.log(orderWord("bobby"));
console.log(orderWord("b"));
console.log(orderWord(""));
console.log(orderWord("completesolution"));
console.log(orderWord("\"][@!$*(^&%"), "!\"$%&(*@[]^");
console.log(orderWord("i\"d][@z!$r(^a&world%"),"!\"$%&(@[]^addilorrwz");
console.log(orderWord(null),"Invalid String!");
console.log(orderWord("cba"),"abc");
console.log(orderWord("abc"),"abc");