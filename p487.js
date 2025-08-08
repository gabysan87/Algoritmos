// Nivel 1 – Simulación básica con async/await
// Ejercicio 1: Saludo con retraso
// Crea una función que espere 2 segundos y luego devuelva un saludo.

const saludo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, gaby");
    }, 2000);
  });
};

const ejecutarSaludo = async () => {
  const mensaje = await saludo();
  console.log(mensaje);
};

ejecutarSaludo();

// Ejercicio 2: Secuencia de mensajes
// Muestra dos mensajes con diferentes tiempos usando await uno tras otro.

const esperar = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const mostrarMensaje = async () => {
  console.log("Iniciando...");
  await esperar(1000);
  console.log("Primer mensaje despues de 1 segundo");
  await esperar(2000);
  console.log("Segundo Mensaje despues de 2 segundos mas");
  await esperar(3000);
  console.log("Tercer mensaje despues de 3 segundos mas");
};

mostrarMensaje();
