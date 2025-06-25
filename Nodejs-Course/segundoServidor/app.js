const http = require ('http')

const servidor = http.createServer((req,res)=>{
   console.log(req.url);
   console.log(req.method)
   res.end('hola mundo')
})

const PUERTO= 3000;

servidor.listen(PUERTO,()=>{
  console.log("servidor escuchando")
})