const contarPalabrasConVocal = (frase) => {
    // Definir la expresión regular para palabras que comienzan con vocal
   const patronVocal = /\b[aeiou]\w+/gi

    // Encontrar todas las coincidencias
    const coincidencias = frase.match(patronVocal)

    return coincidencias ? coincidencias.length : 0
}

//     SI coincidencias NO ES nulo ENTONCES
//         RETORNAR longitud de coincidencias
//     SINO
//         RETORNAR 0
//     FIN SI
// FIN FUNCIÓN
console.log(contarPalabrasConVocal("Esta es una frase de ejemplo")); // Debería devolver 4
console.log(contarPalabrasConVocal("Hola mundo")); // Debería devolver 0
console.log(contarPalabrasConVocal("Agua, aire, isla y oso")); // Debería devolver 4

// g (global): Este modificador indica que la búsqueda debe ser global, es decir, no se detendrá en la primera coincidencia que encuentre, sino que buscará todas las coincidencias dentro del texto.

// i (insensitive): Este modificador hace que la búsqueda sea insensible a mayúsculas y minúsculas, es decir, las letras en mayúscula y minúscula se tratarán de la misma manera. Por ejemplo, A será tratado igual que a.