class Inventario { 
    constructor(nombre){
        this.nombre = nombre;
        this.articulos = { }
    }
add(nombre,cantidad){
    this.articulos[nombre] = cantidad; 
}
borrar(nombre){
    delete this.articulos[nombre]; 
}
cantidad(nombre){
   return this.articulos[nombre]; 
}
getNombre(){
    return this.nombre; 
 }

}

//invocar los metodos
const libros = new Inventario("Libros")
libros.add("React.js", 3);
libros.add("JavaScript", 10);
libros.add("NodeJS", 5);
libros.cantidad("React.js")
libros.cantidad("JavaScript")
libros.borrar("JavaScript")
libros.cantidad("JavaScript")