//Ejemplo 1: Solicitud HTTP simple con fetch
// Este ejemplo usa fetch para obtener datos desde una API simulada.

const obtenerDatos = async  () => {
    try {
        const respuesta = await fetch("https://swapi.dev/api/people/1/");
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

obtenerDatos();

// Aquí, await fetch espera a que la solicitud se complete, y luego await respuesta.json() espera a que los datos se conviertan a formato JSON.

