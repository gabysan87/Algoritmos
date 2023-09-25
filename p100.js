// Precio de los mangos
// Hay una oferta "3 por 2" (o "2+1" si lo desea) en mangos. Para una cantidad y precio determinados (por mango), calcule el costo total de los mangos.

// Ejemplos

const mango = (quantity, price) => {
    return  price * (quantity - Math.floor(quantity / 3));
    }

    console.log((mango(3, 3)))

    console.log(mango(9, 5))
