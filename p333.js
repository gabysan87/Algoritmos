// Planteamiento: Dado un array de votos y un candidato específico, crea una función que cuente cuántas veces fue votado ese candidato.
// Entrada: contarVotos([{candidato: 'A'}, {candidato: 'B'}, {candidato: 'A'}, {candidato: 'C'}], 'A')
// Salida: 2

// Planteamiento: Dado un array de libros y el género, crea una función que agrupe los libros por género.
// Entrada: agruparPorGenero([{titulo: 'Libro1', genero: 'Ficción'}, {titulo: 'Libro2', genero: 'No Ficción'}, {titulo: 'Libro3', genero: 'Ficción'}])
// Salida: { 'Ficción': [{titulo: 'Libro1', genero: 'Ficción'}, {titulo: 'Libro3', genero: 'Ficción'}], 'No Ficción': [{titulo: 'Libro2', genero: 'No Ficción'}] }

const groupByGender = [
    {titulo: 'Libro1', genero: 'Ficción'}, 
    {titulo: 'Libro2', genero: 'No Ficción'}, 
    {titulo: 'Libro3', genero: 'Ficción'}
]

// const 

// Planteamiento: Dado un array de transacciones y una propiedad de categoría, crea una función que agrupe las transacciones por categoría y calcule la suma de cada categoría.
// Entrada: agruparYCalcular([{categoria: 'A', monto: 10}, {categoria: 'B', monto: 20}, {categoria: 'A', monto: 30}])
// Salida: { 'A': 40, 'B': 20 }