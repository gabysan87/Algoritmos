// tipo de variables primitivos :
// almacena 1 tipo de dato

// EJERCICIOS
// Declarar variables de diferentes tipos y mostrar sus valores en la consola.

let num = 7;
let cadena = "hola";
let nulo = null;
let bol = false;
let indefinido = undefined;
let symbol = Symbol();

console.log(typeof num);
console.log(typeof cadena);
console.log(typeof nulo);
console.log(typeof bol);
console.log(typeof indefinido);
console.log(typeof symbol);

//operador typeof: permite conocer el valor que tiene la variable

// tipo de dato compuesto: almacena multiples valores como por ejemplo array y objeto.

// DECLARACION DE UN OBJETO

let person = {
  name: "gaby",
  lastname: "sanchez",
  age: "36",
  "month of birth": "agosto",
};

console.log(person);
console.log(person.age);
console.log(person["month of birth"]);

//desestructurar un objeto

const { name, age } = person;
console.log(name, age);

// declaracion de un array

let frutas = ["uva", "pera", "cambur"];

console.log(frutas);
console.log(frutas[1]);

//destructurar un array

let [valueone, , valuethree] = frutas;

console.log(valuethree);

// Ambito global: las variables y funciones son accesibles desde cualquier parte del codigo

let variableGlobal = "Soy global";

let mostrarGlobal = () => {
  console.log(variableGlobal);
};

mostrarGlobal();

//Ambito LOCAL: son las que estan dentro de la funcion

let mostrarLocal = () => {
  let varibleLocal = "Soy local";
  console.log(varibleLocal);
};

mostrarLocal();

// Expresión de Función

// ClAUSURA : es una función que recuerda el ámbito en el que fue creada, incluso después de que ese ámbito haya terminado de ejecutarse. Esto permite que la función acceda a las variables de su ámbito exterior, incluso después de que la función exterior haya terminado de ejecutarse.

const saludoPersonalizado = (saludo) => (nombre) => `${saludo}, ${nombre}!`;

const saludoHola = saludoPersonalizado("Hola");
console.log(saludoHola("Juan"));
console.log(saludoHola("Ana"));

// const saludoBuenosDias = saludoPersonzalizado("Buenos dias");
// console.log(saludoBuenosDias("Juan"));


// CREACION DE UN OBJETO 

let data = {
    name: "Juan",
    age: 30,
    isstudent: true,

}

// accede a la propiedad dle objeto 
console.log(data.name);
console.log(data["age"])

//modificar una propiedad
data.age = 31
data["isstudent"] = false

console.log(data)

//añadir una propiedad
data.city = "Madrid"

console.log(data)

//creacion de un array 
let fruts = ["manzana","banana", "naranja"];

//acceso a elementos del array
console.log(fruts[0])

//modificar un elemento
fruts[1] = "fresa"
console.log(fruts)

//añadir un neuvo elemento
fruts.push("kiwi")
console.log(fruts)

//eliminar un elemento
fruts.pop();
console.log(fruts)

// Metodos de array
//map: crea un nuevo array con los resultados 

let number = [1,2,3,4,5];
let cuadrado = number.map((num) => num * num)

console.log(cuadrado)

//filter

let numberFilter = (num)  => {
return num.filter((number) => number > 2)
}
console.log(numberFilter([3,2]))

//reduce
let suma = (number) => {
    return number.reduce((acc, curr) => acc + curr, 0)
}

console.log(suma([10,5]))

// array de objetos
let persons = [
    { nombre: "Juan", edad: 30, esEstudiante: true },
    { nombre: "Ana", edad: 22, esEstudiante: false },
    { nombre: "Pedro", edad: 25, esEstudiante: true },
    { nombre: "Maria", edad: 28, esEstudiante: false }
];

// map

let names = () => persons.map((item)=> item.nombre) 

console.log(names())

//Metodo Filter

let student = () => persons.filter((element)=> element.nombre) 

console.log(student())

//metodo reduce

let ageTotal = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.edad,0)
}

console.log(ageTotal(persons))

