// Entrada:
// Un array de objetos que representan empleados, donde cada objeto tiene las propiedades name (nombre), age (edad) y department (departamento). También se define una edad mínima y un departamento específico.

// Voy a realizar la función de flecha pasando los parametros
//

const empleados = [
  { name: "Carlos", age: 25, department: "IT" },
  { name: "Ana", age: 30, department: "HR" },
  { name: "Luis", age: 40, department: "IT" },
  { name: "Sofía", age: 35, department: "Finance" },
  { name: "Miguel", age: 50, department: "IT" },
];

const edadMinima = 30;
const departamentoBuscado = "IT";

//divide y venceras
// 1- crear la funcion
// 2- usar el metodo findLastIndex()
//

const lastEmployees = (arr) => {
  return arr.findLastIndex((element) => element);
};
console.log(lastEmployees(empleados, edadMinima, departamentoBuscado));

// Salida:
// El índice del último empleado en el array que pertenezca al departamento "IT" y cuya edad sea mayor o igual a 30.
// Salida esperada: 4
