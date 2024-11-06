class Colegio {
  constructor(nombre, direccion, numeroDeEstudiantes) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.numeroDeEstudiantes = numeroDeEstudiantes;
  }

  //Metodos

  inscribirEstudiantes(cantidad) {
    this.numeroDeEstudiantes += cantidad;
    return `${cantidad} estudiantes inscritos. Total de estudiantes ${this.numeroDeEstudiantes}`;
  }

  mostrarInformacion() {
    return `Colegio: ${this.nombre}`;
    // return  `Dirección: ${this.direccion}`
    // return  `Número de estudiantes: ${this.numeroDeEstudiantes}`
  }
}

//Instancia
const miColegio = new Colegio(" Pastor Cortes Vasquez", "El Cuji", 500);

console.log(miColegio.mostrarInformacion());

console.log(miColegio.inscribirEstudiantes(20));

console.log(miColegio.mostrarInformacion());
