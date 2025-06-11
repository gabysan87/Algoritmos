// Eliminar una tarea por ID

const task1 = [
  { id: 1, task: "Hacer ejercicio" },
  { id: 2, task: "Leer un libro" },
  { id: 3, task: "Aprender React" },
];

idDelete = 2;

const deleteTask = (listTask, idTask) => {
  return listTask.filter((item) => item.id !== idTask);
};
console.log(deleteTask(task1, idDelete));

//Agregar tareas
// 1 - una funcion que reciba un nombre y un apellido,
// 2- crear un array vacio,
// 3- crear un objeto que tenga las propiedades,
// 4- propiedad id sea igual al indice del elemento

// const list = [
//     {name: "Gabriela" , apellido: "Sanchez"}
// ]

const addUser = (name, lastname) => {
  return [
    {
      name: name,
      lastname: lastname,
    },
  ];
};
console.log(addUser("gabriela", "sanchez"));

//produtos
//AGREGAR PRODUCTOS
const products = [
  { id: 1, price: 1200, name: "televisor" },
  { id: 2, price: 800, name: "computador" },
  { id: 3, price: 900, name: "celular" },
  { id: 4, price: 300, name: "tablet" },
  { id: 5, price: 150, name: "auriculares" },
  { id: 6, price: 200, name: "teclado" },
  { id: 7, price: 100, name: "mouse" },
  { id: 8, price: 250, name: "monitor" },
  { id: 9, price: 500, name: "impresora" },
  { id: 10, price: 50, name: "cargador" },
  { id: 11, price: 120, name: "batería" },
  { id: 12, price: 600, name: "consola" },
  { id: 13, price: 80, name: "altavoz" },
  { id: 14, price: 400, name: "smartwatch" },
  { id: 15, price: 700, name: "laptop" },
  { id: 16, price: 90, name: "webcam" },
  { id: 17, price: 110, name: "micrófono" },
  { id: 18, price: 130, name: "disco duro" },
  { id: 19, price: 140, name: "memoria USB" },
  { id: 20, price: 160, name: "router" },
  { id: 21, price: 170, name: "modem" },
  { id: 22, price: 180, name: "tarjeta gráfica" },
  { id: 23, price: 190, name: "procesador" },
  { id: 24, price: 210, name: "fuente de poder" },
  { id: 25, price: 220, name: "ventilador" },
  { id: 26, price: 230, name: "cable HDMI" },
  { id: 27, price: 240, name: "adaptador" },
  { id: 28, price: 260, name: "hub USB" },
  { id: 29, price: 270, name: "estuche" },
  { id: 30, price: 280, name: "protector de pantalla" },
];

// crea una  funcion que reciba los parametros
//1- crear el nuevo prductos con sus respectivas propiedadees(objeto), crear un objeto de manera literal {}
// 2- traer la copia de los productos (...spread operador)
//3- agregar el elemento al array el objeto [...element]

const addProducts = (id, price, name, listProducts) => {
  return [{ id: id, price: price, name: name }, ...listProducts];
};

console.log(addProducts(Date.now(), 400, "licuadora", products));
