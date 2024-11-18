// Ejemplo 5: Manejo de errores en operaciones asincrónicas
// Aquí, usamos try y catch para manejar errores en una función asincrónica.

const obtenerDatosConError = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if (!respuesta.ok) {
            throw new Error("Error en la solicitud");
        }
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
    }
}

obtenerDatosConError();


// En este caso, si la URL es incorrecta o la solicitud falla, el catch captura el error y muestra el mensaje adecuado en la consola.