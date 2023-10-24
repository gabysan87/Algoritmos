// Pre incremento

let x = 1;
// x vale 1

let y = ++x;
// y vale 2
// x vale 2

// Post incremento

let z = x++;
// z vale 2
// x vale 3

// se incrementa x pero si se coloca antes se va a ejecutar la operacion de incremento antes de realizar cualquier operación
// si lo ponemos despues primero se realiza la operacion

// Decremento
let a = x--;
// a vale 3
// x vale 2

// Pre-decremento

let b = --x;
// b vale 1
// x vale 1

// Condicionales
// Sentencia IF

let operacion = 5 + 1;

if (operacion > 7) {
  console.log("Es mayor que 7");
} else if (operacion < 7 && operacion > 2) {
  console.log("Esta entre 7 y 2");
} else {
  console.log("Es menor que 2");
}

// Sentencia SWITCH
let operacion2 = 5 + 2;

switch (operacion2) {
  case 0:
    console.log("El resultado es 0");
    break;
  case 7:
    console.log("El resultado es 7");
    break;
  default:
    console.log("El resultado no es ni 0 ni 7");
}

// Funciones

const saludar = (nombre1) => {
  return `¡Hola ${nombre1}!`;
  // return "¡Hola " + nombre + "!" esto se hace pero si hay mucho texto entonces es ilegible
};
console.log(saludar("Carlos"));

//Funcion de clases
// asi se realizaba antes
// function Inventario (nombre) {
//     this.nombre = nombre;
//     this.articulos = [];

// }
// Inventario.prototype.getNombre = function(){
//     return this.nombre;
// }
// Inventario.prototype.add = function(articulo, cantidad){
//     this.articulos[articulo] = cantidad;
// }

// let libros = new Inventario("libros")
// libros.getNombre ()
// libros.add("Aprendiendo Javascript", 5)

// Ahora
class Inventario {
  constructor(nombre) {
    this.nombre = nombre;
    this.articulos = [];
  }
  getNombre() {
    return this.nombre;
  }
  add(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
  }
  cantidad(articulo) {
    return this.articulos[articulo];
  }
}

let libros = new Inventario("libros");
libros.getNombre();
libros.add("Aprendiendo Javascript", 5);

//Bucle for
const bucleFor = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
};
bucleFor(11);

//Foreach
const miArray = [1, 2, 3, 4];

return miArray.forEach((item, index) => {
  console.log(`El valor de la posicion
    ${index} es: ${item}`);
});

// Con objetos
