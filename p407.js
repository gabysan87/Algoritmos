const validaEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z][{2,}$]/;
    return regex.test(email); //{2,} longitud minima de 2 caracteres
}

console.log(validaEmail("gaby0487@gmail.com"))
console.log(validaEmail("Gaby0487@gmail.com"))
console.log(validaEmail("1@.com"))
console.log(validaEmail("tony@gmail.c"))

// ^ : indica el inicio de la cadena
// 