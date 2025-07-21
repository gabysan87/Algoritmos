// Uso de operadores lógicos (&&, ||, !)
// Verificar estado del servidor

// Si el servidor está encendido o en modo mantenimiento, muestra "Disponible"
// Si no, muestra "No disponible"
const estadoServidor = (encendido, mantenimiento) => {
  if (encendido || mantenimiento) {
    return "Disponible";
  } else {
    return "No Disponible";
  }
};

console.log(estadoServidor(true, false));
console.log(estadoServidor(false, false));
console.log(estadoServidor(true, true));
console.log(estadoServidor(false, true));
