const miURL = new URL ('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')

console.log(miURL.hostname) //www.ejemplo.org

console.log(miURL.pathname) //curso/programcion

console.log(miURL.searchParams) //objeto que se obtine vistas, nivel 1

console.log(miURL.searchParams.get('ordenar')) //vistas

