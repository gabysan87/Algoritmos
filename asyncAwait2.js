//Ejemplo 2: Esperar múltiples promesas
// Usando await, esperamos que varias operaciones asincrónicas terminen antes de continuar.

async function obtenerDatosMultiples() {
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
