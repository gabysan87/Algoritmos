/* Hacer una funcion que reciba el objeto, que imprima el valor de una propiedad e imprima 
nueva propiedad
{
name:"Oliver",
lastName:"Prada",
email:"oliverprada86@gmail.com"

Av FRancisco Bilbao
}*/

const object = {
    name:"Oliver",
    lastName:"Prada",
    email:"oliverprada86@gmail.com"
}

const addProperty = (obj) =>{

obj.addres = "Av FRancisco Bilbao"

const { name , addres} = obj

return `${name} ${addres}` 
}

console.log(addProperty(object))



const restOperator = (name, lastName, ...info) => {
let arr = [1,2,3,4]
    const [one, two, ...numbers] = arr
return info
}

restOperator("Oliver", "Prada", "oliverprada86@gmail.com",937814958) 

console.log(restOperator("Oliver", "Prada", "oliverprada86@gmail.com",937814958) );