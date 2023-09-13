// 1 Crear un objeto:

// Enunciado: Crea un objeto llamado "persona" con propiedades como nombre, edad y ciudad.
// Ejemplo de entrada y salida:

const person = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

console.log(person);

// 2 Acceder a propiedades
// Accede a las propiedades del objeto "persona" y muestra el nombre en la consola

const person1 = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Barcelona",
};

console.log(person1.nombre);

//3 Agregar una propiedad
// Agrega una propiedad "propiedad" al objeto "persona"

const persona1 = {
  nombre: "Pedro",
  edad: 35,
  ciudad: "Sevilla",
};

persona1.profesion = "Ingeniero";

console.log(persona1);

// 4 - Eliminar una propiedad
// Eliminar una propiedad "ciudad" del objeto "persona2"

const persona2 = {
  nombre: "Luisa",
  edad: 28,
  ciudad: "Valencia",
};

delete persona2.ciudad;
console.log(persona2);

// 5-Iterar sobre propiedades

// Itera sobre las propiedades del objeto "person1" e imprime sus valores en la consola

const persona = {
    nombre: "Carlos",
    edad: 40,
    ciudad: "Bilbao",
  };

for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
}

// 6 - Copiar un objeto:

// Enunciado: Crea un nuevo objeto llamado "copiaPersona" que sea una copia del objeto "persona".

const person6 = {
  nombre: "María",
  edad: 33,
  ciudad: "Málaga"
};
const copiaPersona = Object.assign({}, person6);
console.log(copiaPersona); 

// 7 -Comprobar la existencia de una propiedad:

// Enunciado: Verifica si el objeto "persona" tiene la propiedad "profesion" y muestra un mensaje en la consola.

const person7 = {
  nombre: "David",
  edad: 29
};
if ('profesion' in person7) {
  console.log('La propiedad "profesion" existe en el objeto.');
} else {
  console.log('La propiedad "profesion" no existe en el objeto.');
}

// 8- Calcular el número de propiedades:

// Enunciado: Calcula y muestra en la consola el número de propiedades del objeto "persona".


const person8 = {
  nombre: "Laura",
  edad: 26,
  ciudad: "Zaragoza"
};

const numPropiedades = Object.keys(person8).length;

console.log(`El objeto tiene ${numPropiedades} propiedades`);


// 9 - Combinar dos objetos:

// Enunciado: Crea un nuevo objeto que combine las propiedades de "persona" y "direccion".


const person10 = {
  nombre: "Eduardo",
  edad: 22
};
const direccion = {
  ciudad: "Sevilla",
  calle: "Calle Principal"
};
const perfil = { ...person10, ...direccion };
console.log(perfil);

// 10 - Encapsulación de datos:

// Enunciado: Crea un objeto llamado "cuentaBancaria" con una propiedad privada llamada "saldo" y métodos públicos para depositar y retirar dinero.


const cuentaBancaria = {
  _saldo: 1000, // Propiedad privada
  depositar: function(cantidad) {
    if (cantidad > 0) {
      this._saldo += cantidad;
      console.log(`Se depositaron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('La cantidad debe ser mayor que cero.');
    }
  },
  retirar: function(cantidad) {
    if (cantidad > 0 && cantidad <= this._saldo) {
      this._saldo -= cantidad;
      console.log(`Se retiraron ${cantidad} unidades. Saldo actual: ${this._saldo}`);
    } else {
      console.log('Saldo insuficiente o cantidad no válida.');
    }
  }
};

cuentaBancaria.depositar(500); // Saldo actual: 1500
cuentaBancaria.retirar(200);   // Saldo actual: 1300

