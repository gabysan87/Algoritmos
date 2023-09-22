const posts = [
  {
    id: 1,
    title: "Mi primer post",
    image: "https:/img.com/1",
    tags:["javascript", "webdevelopment"]
  },
  {
    id: 2,
    title: "Mi experiencia con React",
    image: "https:/img.com/2",
    tags:["javascript", "webdevelopment", "React"]
  },
  {
    id: 2,
    title: "Por qué dejé Angular",
    image: "https:/img.com/3",
    tags:["javascript", "webdevelopment", "angular"]
  }
]

// devuelve el titulo de cada objeto
const result = posts.map(item => item.title)

console.log(result)