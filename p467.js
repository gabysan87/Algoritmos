// 1- Tengo un array de objetos que representa una lista de tareas
// Agregar una tarea al array
const task = [
  { id: 1, task: "Hacer ejercicio" },
  { id: 2, task: "Leer un libro" },
];

const newTask = { id: 3, task: "Aprender React" };

//Divide y venceras
// creo un funcion que tenga 2 parametros (array de tareas y el parametro es la tarea a agregar)
// utilizo el OPERADOR SPREAD para traer la copia del array
// uso el metodo concat para agregar un elemento mas al array

const addTask = (lisTask, newTask) => {
  return [...lisTask.concat(newTask)];
};
console.log(addTask(task, newTask));

//2-  Eliminar una tarea por ID

const task1 = [
  { id: 1, task: "Hacer ejercicio" },
  { id: 2, task: "Leer un libro" },
  { id: 3, task: "Aprender React" },
];

idDelete = 2;

//Divide y venceras
// 1- creo un funcion con los parametros del array y la tarea a eliminar
// 2 - uso un metodo que sirva para eliminar un elemento (filter)
// con el metodo filter voy a recorrer los elementos del array y voy a  filtrar a aquellos que no cumplan con la condicion , usando el operador de negacion !

const deleteTask = (task, value) => {
  return task.filter((element) => element.id !== value);
};
console.log(deleteTask(task1, idDelete));

let coersion = 5 === 5;
let coersion2 = 5 === "5";
let igualdadDebil = 5 == "5";
console.log(coersion);
console.log(coersion2);
console.log(igualdadDebil);

//Coersion:
// Prioriza el tipo no el valor
//identidad = igualdad estricta ( === )
// igualdad = igualdad debil == (compara 2 valores sin considerar el tipo de dato)

//3- Editar una tarea

const tasks3 = [
  { id: 1, task: "Hacer ejercicio", completed: true },
  { id: 2, task: "Leer un Libro", completed: true },
];

idAEditar = 1;
nuevoTexto = "Leer un artículo";

//crear una funcion que tenga 3 parametros: el array, el id a modificar, y la propiedad donde se modifica el valor
// trabajar con un metodo para recorrer cada elemento del array (map)
// comparo estrictamente el id con el id a editar
// luego uso el operador ternario para colocar la condicion
// para devolverlo en un objeto literal {}
// voy a traer la copia del array con el spread operator
//modifico el array de tarea, la propiedad task

const editTask = (lisTask, ids, newTask) => {
  return lisTask.map((item) => {
    return item.id === ids ? { ...item, task: newTask } : item;
  });
};
console.log(editTask(tasks3, idAEditar, nuevoTexto));
