// Se le dará una lista de cadenas. Debe ordenarlo alfabéticamente (distingue entre mayúsculas y minúsculas y según los valores ASCII de los caracteres) y luego devolver el primer valor.

// El valor devuelto debe ser una cadena y tener "***" entre cada una de sus letras.

// No debe eliminar ni agregar elementos desde/a la matriz.

const twoSort= (s) => {

    return s.sort()[0].split("").join("***")
}
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))