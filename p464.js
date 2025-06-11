//Dado un array de tareas donde cada tarea tiene un id , un text y un estado completed(true o false),implementa una función que reciba una lista de tareas y un id , y cambie el estado de completed de la tarea con ese id.

//la función debe retornar un nuevo array con la tarea modificada, sin alternar las demás

//Divide y venceras
// 1- Voy a utilizar el método map para recorrer la lista
// 2- voy a utilizar la comparación estrictamente igual accediendo a la propiedad
// 3- voy a realizar copia del array mediante el operador spread
// 4-* voy a utilizar el operador ternario para alternar el estado del ID

const task = [
  { id: 1, text: "Hacer Ejercicio", completed: false },
  { id: 2, text: "Leer un libro", completed: true },
  { id: 3, text: "Aprender React", completed: false },
];

const changeId = 2;

const changeStatus = (listText, value) => {
  return listText.map((element) =>
    element.id === value
      ? { ...element, completed: !element.completed }
      : element
  );
};

console.log(changeStatus(task, changeId));

//1-recorrer el array con el metodo map
//2- encontrar el elemento en el id del elemento asignado
//3- si encuentro el id modificado el text agregando el tachado al final del "text"
//4-

const task2 = [
  { id: 1, text: "Hacer Ejercicio", completed: false },
  { id: 2, text: "Leer un libro", completed: true },
  { id: 3, text: "Aprender React", completed: false },
];

const changeId2 = 2;

const changeStatus2 = (listText, value) => {
  return listText.map((element) =>
    element.id === value
      ? { ...element, text: element.text + "(tachado)" }
      : element
  );
};

console.log(changeStatus2(task2, changeId2));
