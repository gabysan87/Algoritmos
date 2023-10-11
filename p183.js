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
return `${name} ${addres} ` 
}
console.log(addProperty(object))
