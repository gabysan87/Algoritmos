
// Nombre en cartelera
// Puede imprimir su nombre en un anuncio publicitario. Descubra cuánto le costará. Cada carácter tiene un precio predeterminado de £30, pero eso puede ser diferente si se le dan 2 parámetros en lugar de 1 (siempre 2 para Java).

// No se puede utilizar el operador multiplicador "*".

// Si su nombre fuera Jeong-Ho Aristotelis, el anuncio costaría £600. 20 letras * 30 = 600 (El espacio cuenta como un carácter).

const billboard = (name, price = 30) => {
return name.repeat(price).length;
}

console.log(billboard("Jeong-Ho Aristotelis"));
console.log(billboard("Abishai Charalampos"));
console.log(billboard("Idwal Augustin"));
console.log(billboard("Hadufuns John"));
console.log(billboard("Zoroaster Donnchadh"))
console.log(billboard("Claude Miljenko"));
console.log(billboard("Werner Vígi",15));
console.log(billboard("Anani Fridumar"));
console.log(billboard("Paolo Oli"));
console.log(billboard("Hjalmar Liupold",40));
console.log(billboard("Simon Eadwulf"));

// El algoritmo realiza lo siguiente:

// Utiliza el método repeat de las cadenas de JavaScript para repetir la cadena name un número de veces igual a price. Esto crea una cadena más larga que contiene múltiples copias de name.

// Luego, se llama a length en la cadena resultante, que devuelve la longitud (número de caracteres) de esa cadena.

// En resumen, este algoritmo calcula el costo de mostrar el nombre name en una cartelera multiplicando el precio por carácter (price) por la longitud del nombre name. Esto se hace usando el método repeat y luego midiendo la longitud de la cadena resultante. Por ejemplo, si name es "Jeong-Ho Aristotelis" y price es 30 (precio predeterminado por carácter), el algoritmo calculará el costo total multiplicando 30 por la longitud de la cadena "Jeong-Ho Aristotelis", que es 20 (incluyendo espacios), y devolverá 600 como resultado.





