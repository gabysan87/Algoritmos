function renderProducto(producto) {
  const inventario = [
    { nombre: "Mouse", precio: 20, activo: true },
    { nombre: "Silla", precio: 150, activo: false },
    { nombre: "Cam", precio: 80, activo: true },
  ];

  const { nombre, precio, activo } = producto;
  if (!activo) return null;
  console.log(nombre);

  function renderLista(lista) {
    lista.forEach((prod) => {
      console.log(prod.nombre.toUpperCase());
    });
  }

  renderLista(inventario);

  //   return (
  //     <div className="tarjeta">
  //       <h2>{nombre}</h2>
  //       <p>Precio: {precio}</p>
  //     </div>
  //   );
}
