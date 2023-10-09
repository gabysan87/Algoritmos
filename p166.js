// Recibir un string y validar si es pangrama.

const validatePangrama = (str) => {
    let abc = 26
    let result = str.replace(/[^A-Za-z0-9]/g, "").toUpperCase().split("")

    return [...new Set(result)].sort().length == abc

}

console.log(validatePangrama("Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol"))