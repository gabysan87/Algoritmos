
const dataUser = {
    name: "Gabriela",
    lastname: "Sanchez",
    "correo electronico": "gabysan@gmail.com",
    age: 36,
}



const {name, age:años} = dataUser

console.log(dataUser)

 let arr = ["gaby", 36, "sanchez", true, false, 123 ]

let [valueone, , , , valuefor, , ] = arr


const boleano = arr[2]

console.log(valueone)
console.log(valuefor)
console.log(boleano)