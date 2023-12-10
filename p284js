const person = {
    name: "Gaby",
    lastname: "Sanchez",
    edad: 36
}
//desestructuracion: agrupar por parte el codigo

const {name,lastname, edad} = person
console.log(name, lastname, edad)


// agregar propiedades
person.email = "gabysan1987@hotmail.com"
console.log(person)

const result = {...person, adress: "renca"}
console.log(result)

// cambiar el valor a una propiedad 

person.name = "Gabriela"

console.log(person)

// eliminar una propiedad

delete person.name

console.log(person)

// recorrer las propiedades de un objeto y devolver los valores de las propiedades

for ( property in person) {
    console.log(property)
    
}
for (property in person){
    console.log(person[property])
}

//operador rest
const result1 = (lastname, edad, ...rest) => {
    console.log(rest)
}

console.log(result1("Gaby", 20, "santiago", 40))

// verificar si una propiedad existe dentro de un objeto

console.log(person.hasOwnProperty("edad"))

console.log("color" in person)


