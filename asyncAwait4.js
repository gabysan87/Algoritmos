//Ejemplo 4: Cadena de operaciones dependientes
// Este ejemplo muestra cómo manejar múltiples operaciones asincrónicas donde el resultado de una depende de la anterior.

const obtenerUsuarioYPosts = async () => {
    try {
        const usuario = await fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
        console.log("Usuario:", usuario);

        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuario.id}`).then((res) => res.json());
        console.log("Posts del usuario:", posts);
    } catch (error) {
        console.error("Error en el proceso:", error);
    }
}

obtenerUsuarioYPosts();

// En este ejemplo, obtenemos los datos de un usuario y, usando su id, realizamos otra solicitud para obtener sus posts. Las solicitudes se ejecutan de manera secuencial.

