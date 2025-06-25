const http = require ('http')

const cursos = require('./cursos')

const servidor = http.createServer((req,res)=>{
  const {method}= req;

  switch (method){
    case 'GET':
      return manejarSolicitudGET(req,res)
    case 'POST':
      return manejarSolicitudPOST(req,res)
      default:
      console.log(`metodo no se puede manejar ${method}`)
  }
})

function manejarSolicitudGET(req,res){
  const path = req.url

  if (path ==='/'){
    res.statusCode= 200;
    return res.end('BIENVENIDO A MI PRIMER SERVIDOR Y API')
  } else if (path === '/cursos'){
    res.statusCode =200;
    return res.end(JSON.stringify(cursos.infoCursos))
  } else if (path === '/cursos/programacion'){
    res.statusCode =200;
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  }

  res.statusCode=404
  return  res.end("recurso no encontrado")
}

function manejarSolicitudPOST(req, res){
  const path = req.url

  if (path ==='/curso/programacion'){
    let cuerpo= "";
    
    req.on('data',contenido =>{
      cuerpo += contenido.toString();
    })

    req.on('end',()=> {
      console.log(cuerpo)
      console.log (typeof cuerpo)

      //convertir un objeto de JAVASCRIPT 
      cuerpo = JSON.parse(cuerpo)
      console.log(typeof cuerpo)
      console.log(cuerpo.titulo)

    })
  }

}

PUERTO=3000

servidor.listen(PUERTO,()=>{
  console.log('servidor escuchando puerto 3000') 
})