// Crea un programa que calcule el máximo de tres números ingresados por el usuario.


    // let num1 = 39
    // let num2 = 20
    // let num3 = 28
    
    // let maximo;
    
    // if (num1 >= num2 && num1 >= num3) {
    //   maximo = num1;
    // } else if (num2 >= num1 && num2 >= num3) {
    //   maximo = num2;
    // } else {
    //   maximo = num3;
    // }

     // console.log("El máximo es: " + maximo);

    const maximunNumber = (number) => {
        return number.sort((a,b)=> b-a)[0]
    }
    
    console.log(maximunNumber([29, 30, 39]))
   

