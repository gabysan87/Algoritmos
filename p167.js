// En un array de objetos, devolver en la funcion el objeto que es igual a un id dado.

const obj = [{
    nombre: "Maria",
    apellido: "Gomez",
    id: 34,
},
    {
        nombre: "Gabriela",
        apellido: "Sanchez",
        id: 35,
    },
    {
        nombre: "Jose",
    apellido: "Carmona",
    id: 42
    }]

    const filterEdad = (arr,id) => {
        return arr.filter((item) => item.id === 42)
        // return arr.sort((a,b) => a.id - b.id )
        // return arr.reduce((acc,curr) => acc + curr.id,0)
    }
    console.log(filterEdad(obj,42))