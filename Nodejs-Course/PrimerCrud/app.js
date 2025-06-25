var mysql = require('mysql')

var conexion = mysql.createConnection(
  {
    host: 'localhost',
    database: 'cursos',
    user:'root',
    password:'Kissling3077'
  }
);

conexion.connect(function (error){
  if(error){
    throw error;
  }else{
    console.log('conexion exitosa')
  }
})

//consultas a la db: 

conexion.query('SELECT * from usuarios', function(error,results,fields){
  if(error)
  throw error;

  results.forEach(result => {
    console.log(result)
    
  });
})


//Insertar
// conexion.query("INSERT INTO usuarios (nombre, apellido) VALUES ('ramon', 'pedrito')", function (error, resultado) {
//   if (error) {
//     throw error;
//   }
//   console.log(resultado,"registrado");
// });

//ACTUALIZAR :

//conexion.query("UPDATE usuarios SET nombre = 'Carlos', apellido =  'Romero' WHERE id=3", function (error, resultado) {
//  if (error) {
//    throw error;
//  }
//  console.log(resultado);
//});
//
//conexion.end();
//

//Borrar

// conexion.query("DELETE FROM usuarios WHERE nombre='ramon'", function (error, resultado) {
//   if (error) {
//     throw error;
//   }
//   console.log(resultado, "borrado");
// });

