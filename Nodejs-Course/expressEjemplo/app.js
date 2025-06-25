const express = require('express');
const { string } = require('mathjs');

const  app = express();

const {infoCursos}= require('./cursos.js')

//Routing con esto le decimos que metodo http vamos a usar
//dentro del metodo va a ir el camino o router/ruta 
//como segundo argmento vamos a pasar una funcion flecha req y res
//con esto vamos a manejar que va pasar cuando haya una solicitud get
//en esa ruta
app.get('/',(req,res)=>{
  res.send('mi primer servidor dde Cursos')
}) 

app.get('/api/cursos',(req,res)=>{
  res.send(infoCursos)
})

//rutas
app.get('/api/cursos/programacion',(req,res)=>{
  res.send(infoCursos.programacion)
})

//parametros URL: con esto usamos el extracto extraido de la url para almacenarlo como 
//una variable y usarla en nuestra funcion para ello ponemos la variable despues de : en la req
//filter es una funcion de js- nada que ver con node 

app.get('/api/cursos/programacion/:lenguaje',(req,res)=>{
  const lenguaje= req.params.lenguaje;
  const resultado= infoCursos.programacion.filter(curso=> curso.lenguaje=== lenguaje)

  if (resultado.length === 0){
    return res.status(404).send("no se encontraron cursos")
  }

  console.log(req.query.ordenar)

  if (req.query.ordenar=== 'vistas'){
    return res.send (resultado.sort((a,b)=> a.vistas - b.vistas))
  } 
    res.send(resultado)

  res.send(resultado)
})


//PARAMETOS QUERY= ES UN PARAMETRO QUE INCLUIMOS AL FINAL DE UNA URL despues de un ?
//tienen una clave y un valor por ejemplo localhost/ordenar=vista
//ordenar es la clave .. vista el valor





//process.env.PORT es una variable que va a asignar el puerto que esta definido 
//en el punto env. o hambiente donde se esta ejecutando sino sera ejecutado en el 3000
const PUERTO=  process.env.PORT || 3000

app.listen(PUERTO, ()=>{
  console.log ("el servidor esta escuchando ....")
})



//creacion de routes:

const routerProgramacion = express.Router();
app.use('/api/cursos/programacion',routerProgramacion)

//en lugar de app se usa routerProgramacion ya que a partir de esa base
//ya no se usa app sino router.

routerProgramacion.get('/')


//METODOS POST: