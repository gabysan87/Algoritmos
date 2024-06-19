//Escribe una función para convertir un nombre en iniciales.
//Este kata toma estrictamente dos palabras con un espacio entre ellas.

//La salida debe ser dos letras mayúsculas con un punto separándolas.



const nameInitial = (str) => {
    return str.split(" ").map((item) => item[0]).join(".")
}


console.log(nameInitial('Gabriela Sanchez'))

