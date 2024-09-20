  const peliculas = [ 
    { titulo: "Sueño de libertad" },
    { titulo: "El padrino" },
    { titulo: "El caballero de la noche" },
    { titulo: "Tiempos violentos" },
    { titulo: "El señor de los anillos: El retorno del rey" },
    { titulo: "Forrest Gump" },
    { titulo: "El origen" },
    { titulo: "El club de la pelea" },
    { titulo: "Matrix" },
    { titulo: "Buenos muchachos" },
    { titulo: "Tortugas Ninja" },
    { titulo: "Tortugas Ninja II: El secreto del ooze" },
    { titulo: "Tortugas Ninja III" },
    { titulo: "TMNT" },
    { titulo: "Tortugas Ninja: Fuera de las sombras" }
];

const buscarPeliculas = (arr, search) => {
    return arr.reduce((acc, curr) => {
        if (curr.titulo.toLowerCase().includes(search.toLowerCase())) {
            acc.push(curr);
        }
        return acc;
    }, []);
}


console.table(buscarPeliculas(peliculas,"tortugas"));


// Reduce:

// La función usa reduce, un método que itera sobre cada elemento del arreglo arr.
// Callback de reduce:
// acc: Es el acumulador, donde se almacenarán los resultados de la búsqueda.
// curr: El elemento actual de la iteración, que en este caso es cada objeto del arreglo peliculas.
// Dentro del reduce, se usa if para verificar si el título de la película actual (curr.titulo) contiene el término de búsqueda. Para evitar problemas con mayúsculas y minúsculas, se usa .toLowerCase() tanto en el título como en el término de búsqueda.
// includes: Este método verifica si una cadena está contenida dentro de otra. Aquí se evalúa si el título de la película contiene la palabra buscada.
// Si el título cumple con la condición, se agrega el objeto curr al arreglo acc.