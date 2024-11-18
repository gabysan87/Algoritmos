// Ejemplo 3: Función asincrónica con temporizador (setTimeout)
// En este ejemplo, simulamos un retraso en una operación usando setTimeout.

const  esperar = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const  procesarConRetraso = async () => {
    console.log("Iniciando...");
    await esperar(2000); // Espera 2 segundos
    console.log("Proceso completado después de 2 segundos");
}

procesarConRetraso();

//Aquí, esperar es una función que devuelve una promesa que se resuelve después de un tiempo determinado. await esperar(2000) pausa la ejecución de la función durante 2 segundos.