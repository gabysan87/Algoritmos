/* Hacer una funcion que reciba el objeto, que imprima el valor de una propiedad e imprima 
nueva propiedad
{
name:"Gabriela",
lastName:"Sanchez",
email:"gabysan0487@gmail.com"

Av FRancisco Bilbao
}*/

const object = {
    name:"Gabriela",
    lastName:"Sanchez",
    email:"gabysan0487@gmail.com"
}

const addProperty = (obj) => {

obj.addres = "Av Francisco Bilbao"

console.log(object)


const { name , addres} = obj

return `${name} ${addres}` 
}

console.log(addProperty(object))


//operador REST 
const restOperator = (name, lastName, ...info) => {
// let arr = [1,2,3,4]
//     const [one, two, ...numbers] = arr
return info
}

// restOperator("Gabriela", "Sanchez", "gabysan04876@gmail.com",937814958) 

console.log(restOperator("Gabriela", "Sanchez", "hola", "gabysan0487@gmail.com",975420058, ) );


const arr = (one, two, ...numbers) =>{
    return numbers
}

console.log(arr(1,2,3,4))

