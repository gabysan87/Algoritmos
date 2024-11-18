//Ejemplo 2: Esperar múltiples promesas
// Usando await, esperamos que varias operaciones asincrónicas terminen antes de continuar.

const obtenerDatosMultiples = async  () => {
    try {
        const [usuario, posts] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json()),
            fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => res.json())
        ]);
        console.log("Usuario:", usuario);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

obtenerDatosMultiples();

//En este caso, Promise.all espera que todas las promesas se completen antes de continuar, permitiendo hacer solicitudes simultáneas.
