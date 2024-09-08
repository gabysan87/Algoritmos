//declare una funcion que reciba un unico parametro, que se compare con un numero aleatorio y que devuelva true o false si el nro. es mayor o igual al nro. aleatorio.

//Divide y venceras
// 1-declarar la funcion que toma un numero como parametro.
//2- generar un numero aleatorio entre 1 y 10
//3-Comparar el nro ingresado con el numero aleatorio.
//4-la funcion devuelve true o false segun la comparacion.
//5- imprimir el resultado de la comparacion 

const compareNumber = (num) => {
    let randomNumber = Math.ceil(Math.random() * 10);
    return num >= randomNumber
}
console.log(compareNumber(5))

//Explicación de los pasos:
//Entrada: Se solicita un número de entrada (lo que pasa como parámetro).
//Generar número aleatorio: Se genera un número aleatorio entre 1 y 10.
//Comparación: Se compara el número ingresado con el número aleatorio.
//Decisión: Si el número ingresado es mayor o igual al número aleatorio, se devuelve true; si no, se devuelve false.
//