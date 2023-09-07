// Planteamiento: Escribe una función que tome como entrada una cadena y determine si contiene al menos una letra mayúscula y una letra minúscula.
// Entrada: Una cadena, por ejemplo: "HolaMundo"
// Salida: true si la cadena contiene al menos una letra mayúscula y una letra minúscula, false en caso contrario.


const verifyLetter = (str) => {
    const searchForUppercase = /[A-Z]/;
    const searchLowercase = /[a-z]/;
    
    return searchForUppercase.test(str) && searchLowercase.test(str)

//     return (/[A-Z]/.test(str) && /[a-z]/.test(str) )
}

console.log(verifyLetter("HolaMundo"))
console.log(verifyLetter("HOLAMUNDO"))

// El método test()ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
// Retorna true si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna false.