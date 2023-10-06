const isPrangram = (str) => {
    let alphabet ="abcdefghijklmnñopqrstuvwxyz"
    return alphabet.split("").every((a) => str.includes(a))
}

console.log(isPrangram("El veloz murcilago hindú comia feliz cardillo y kiwi. La cigueña tocaba el saxofon detras del palenque de paja"))

console.log(isPrangram("hola"))