// /Enunciado:
//Dado un array de usuarios, cada uno con un nombre y un array de tareas (donde cada tarea tiene un título y un estado de completado), crea una función que devuelva una lista de usuarios con sus tareas pendientes.

//Entrada:
const usuarios = [
  {
    nombre: "María",
    tareas: [
      { titulo: "Lavar platos", completada: true },
      { titulo: "Hacer la cama", completada: false },
    ],
  },
  {
    nombre: "Pedro",
    tareas: [
      { titulo: "Sacar la basura", completada: false },
      { titulo: "Regar plantas", completada: true },
    ],
  },
];


const userTask = (array) => {
return array.map((item)=> {
    const taskPending = item.tareas.filter((task) => task.completada === false)
    return{
        nombre: item.nombre,
        tareasPendientes: taskPending.map((element) => element.titulo)
    }
    })

}
console.log(userTask(usuarios))

//Salida:
// [
//   { nombre: "María", tareasPendientes: ["Hacer la cama"] },
//   { nombre: "Pedro", tareasPendientes: ["Sacar la basura"] },
// ];