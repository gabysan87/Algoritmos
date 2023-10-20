// Diversión simple #176: Letra inversa
// Tarea
// Dada una cadena str, inviértala y omita todos los caracteres no alfabéticos.

// Ejemplo
// Para str = "krishan", la salida debería ser "nahsirk".

// Para str = "ultr53o?n", la salida debería ser "nortlu".

// De entrada y salida
// [input]cadenastr
// Una cadena consta de letras latinas minúsculas, dígitos y símbolos.

// [output]una cuerda

const reverseLetter = (str) => {
  return Array.from(str)
    .reverse()
    .join("")
    .replace(/[^a-zA-Z]/g, "");
};

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
console.log(reverseLetter("ab23c"));
