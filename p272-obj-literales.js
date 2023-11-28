const persona = {
nombre: "Tony",
apellido: "Stark",
edad: 45,
direccion: {
    ciudad:  "New York",
    zip: 5545555,
    lat: 14.76263,
    lng: 34.3232,
}
}

//console.table( persona )
console.log( persona)


// Asignacion no relizar no me clona el objeto 
// const persona2 = persona; 

//Clonacion
const persona2 = {...persona}; 
//Cambiar el valor  a la propiedad nombre 
persona2.nombre = "Peter"


console.log(persona)
console.log(persona2)