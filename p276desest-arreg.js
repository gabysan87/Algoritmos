const personajes = ["Goku", "Vegeta", "Trunks"];

const [ , , p3] = personajes;


console.log( p3)

const retornaArreglo = () => {
    return ["ABC", 123]
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros)

// Tarea
//1- el primer valor del arr se llamara nombre 
// 2- se llamara setNombre

const useDate = (valor) => {
    return [ valor, () => { console.log ("Hola Mundo")}];
}

const [nombre, setNombre]= useDate("Goku")

console.log(nombre)
setNombre()