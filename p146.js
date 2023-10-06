// en un array de objetos que tiene nombre y apellido y ID, devolver el objeto completo al que pertenece el id 

const obj = [{
    nombre:"camila",
    apellido: "lares",
    id: 20
},
{
    nombre:"luis",
    apellido: "fernandez",
    id: 25
},
{
    nombre:"zaul",
    apellido: "bello",
    id: 29
},
{
    nombre:"maria",
    apellido: "linares",
    id: 18
}]

const filterId = (objeto, id) =>{
    return objeto.find((item)=> item.id === id)
}
console.log(filterId(obj,20))