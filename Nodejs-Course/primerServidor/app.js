const http = require ('http');
//para crear un servidor se le pasa a la funcion create server 
// la req (que es la solicitud http) y la res(que es la respuesta
//que enviamos al cliente)
const servidor = http.createServer((req,res)=>{
  res.end("hola Mundo")
});
//usamos el metodo listen para saber porque puerto esta escuchando y 
//la funcion flecha define que queremos que haga cuando se ejecute el puerto 

const puerto=3000;

servidor.listen(puerto, ()=>{
  console.log(`el servidor esta escuchando ${puerto}`)
})

