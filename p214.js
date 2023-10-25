//Objetos puede tener varios nivles, no hace falta que las propiedades esten en el mismo nivel, una propiedad puede tener asi mismo dentro otro objeto con mas popiedades

let libro = {
  titulo: "Aprendiendo JavaScript",
  autor: {
    nombre: "Carlos Azaustre",
    edad: 36,
    redes: {
      tiktok: "tiktok.com/@carlosazaustre",
      twitch: "twitch.tv.carlosazaustre",
    },
  },
  editorial:{
    nombre: "carlosazaustre.es Books",
    web:"https://carlosazaustre.es"
  }
};

//accediendo con notacion de punto, array o mixto
console.log(libro.autor.edad)
console.log(libro.titulo)
console.log(libro.autor.redes)
console.log(libro["autor"]["edad"])
console.log(libro["editorial"].web)
