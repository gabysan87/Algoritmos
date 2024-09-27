// Implementa una función que aplane un array de objetos anidados en un solo nivel, manteniendo las claves de ruta.
// Entrada:
const javascriptCopyconst = [
  {
    id: 1,
    info: {
      nombre: "Alice",
      trabajo: {
        titulo: "Desarrollador",
        departamento: "IT"
      }
    }
  },
  {
    id: 2,
    info: {
      nombre: "Bob",
      trabajo: {
        titulo: "Gerente",
        departamento: "Ventas"
      }
    }
  }
];

const aplanarObjetos = (datos) => {
return datos.flat(2)
}

console.log(aplanarObjetos(javascriptCopyconst)) 


// Salida esperada:
// javascriptCopy[
//   {
//     "id": 1,
//     "info.nombre": "Alice",
//     "info.trabajo.titulo": "Desarrollador",
//     "info.trabajo.departamento": "IT"
//   },
//   {
//     "id": 2,
//     "info.nombre": "Bob",
//     "info.trabajo.titulo": "Gerente",
//     "info.trabajo.departamento": "Ventas"
//   }
// ]