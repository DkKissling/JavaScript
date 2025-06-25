//MODULO FS
//sirve para trabajar con los archivos de nuestro sistema.- LEER MODIFICAR COPIAR ELIMINAR CAMBIAR
//TODOS LOS METODOS SON ASINCRONOS.-

const fs = require('fs');

fs.readFile('index.html','utf-8',(err,contenido) =>{
  if (err){
    console.log(err);
  }else{
    console.log(contenido);
  }
})
//esto permite ver el archivo html directamente en consola especificamente