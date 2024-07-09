// {/* <div id="contenedor">
//         <p class="parrafo">Este es un párrafo.</p>
//     </div>
//     <button id="agregar">Agregar Párrafo</button>
//     <button id="eliminar">Eliminar Párrafo</button>

//     <script>
//         const contenedor = document.getElementById('contenedor');
//         const botonAgregar = document.getElementById('agregar');
//         const botonEliminar = document.getElementById('eliminar');

//         // Agregar un nuevo párrafo
//         botonAgregar.addEventListener('click', () => {
//             const nuevoParrafo = document.createElement('p');
//             nuevoParrafo.textContent = 'Este es un nuevo párrafo.';
//             contenedor.appendChild(nuevoParrafo);
//         });

//         // Eliminar el último párrafo
//         botonEliminar.addEventListener('click', () => {
//             if (contenedor.lastChild) {
//                 contenedor.removeChild(contenedor.lastChild);
//             }
//         });
//     </script> */}

//     // ejercicio DOM
//     <body>
//     <h1 id="titulo">Hola, Mundo!</h1>
//     <p class="parrafo">Este es un párrafo.</p>
//     <p class="parrafo">Este es otro párrafo.</p>
//     <button id="boton">Haz clic aquí</button>

//     <script>
//         // Seleccionar el botón
//         const boton = document.getElementById('boton');

//         // Agregar un evento de clic al botón
//         boton.addEventListener('click', () => {
//             // Seleccionar el título
//             const titulo = document.getElementById('titulo');

//             // Modificar el contenido del título
//             titulo.textContent = '¡Has hecho clic!';

//             // Modificar el estilo del título
//             titulo.style.color = 'red';

//             // Agregar una clase al título
//             titulo.classList.add('nuevo-estilo');
//         });
//     </script>
// </body>